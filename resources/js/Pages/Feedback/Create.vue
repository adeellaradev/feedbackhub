<script setup lang="ts">
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import { useForm, Link } from '@inertiajs/vue3';
import TextInput from '@/Components/TextInput.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { ref, computed } from 'vue';

marked.setOptions({
  gfm: true,
  breaks: true,
});

const form = useForm({
  title: '',
  category: 'other',
  description: ''
})

const showPreview = ref(false)

function render(mdText: string) {
  const html = marked.parse(mdText || '') as string;
  return DOMPurify.sanitize(html)
}

 
function insertFormatting(before: string, after: string = '') {
  const textarea = document.getElementById('description') as HTMLTextAreaElement
  if (!textarea) return
  
  const start = textarea.selectionStart
  const end = textarea.selectionEnd
  const selectedText = textarea.value.substring(start, end)
  
  let newText = ''
  if (selectedText) { 
    newText = before + selectedText + (after || before)
  } else { 
    const placeholder = after ? 'text' : 'text'
    newText = before + placeholder + (after || before)
  }
  
  const beforeText = textarea.value.substring(0, start)
  const afterText = textarea.value.substring(end)
  
  form.description = beforeText + newText + afterText 
  setTimeout(() => {
    if (selectedText) {
      textarea.setSelectionRange(start + before.length, start + before.length + selectedText.length)
    } else {
      const placeholderLength = after ? 'text'.length : 'text'.length
      textarea.setSelectionRange(start + before.length, start + before.length + placeholderLength)
    }
    textarea.focus()
  }, 0)
}

function insertBold() {
  insertFormatting('**')
}

function insertItalic() {
  insertFormatting('_')
}

function insertCode() {
  insertFormatting('`')
}

function insertLink() {
  insertFormatting('[', '](url)')
}

function insertList() {
  const textarea = document.getElementById('description') as HTMLTextAreaElement
  if (!textarea) return
  
  const start = textarea.selectionStart
  const beforeText = textarea.value.substring(0, start)
  const afterText = textarea.value.substring(start)
  
  const newLine = beforeText.endsWith('\n') || beforeText === '' ? '' : '\n'
  form.description = beforeText + newLine + '- ' + afterText
  
  setTimeout(() => {
    textarea.setSelectionRange(start + newLine.length + 2, start + newLine.length + 2)
    textarea.focus()
  }, 0)
}

function insertHeading() {
  const textarea = document.getElementById('description') as HTMLTextAreaElement
  if (!textarea) return
  
  const start = textarea.selectionStart
  const beforeText = textarea.value.substring(0, start)
  const afterText = textarea.value.substring(start)
  
  const newLine = beforeText.endsWith('\n') || beforeText === '' ? '' : '\n'
  form.description = beforeText + newLine + '## ' + afterText
  
  setTimeout(() => {
    textarea.setSelectionRange(start + newLine.length + 3, start + newLine.length + 3)
    textarea.focus()
  }, 0)
}

function insertCodeBlock() {
  const textarea = document.getElementById('description') as HTMLTextAreaElement
  if (!textarea) return
  
  const start = textarea.selectionStart
  const beforeText = textarea.value.substring(0, start)
  const afterText = textarea.value.substring(start)
  
  const newLine1 = beforeText.endsWith('\n') || beforeText === '' ? '' : '\n'
  const newLine2 = '\n'
  const codeBlock = '```\ncode here\n```'
  
  form.description = beforeText + newLine1 + codeBlock + newLine2 + afterText
  
  setTimeout(() => {
    textarea.setSelectionRange(start + newLine1.length + 4, start + newLine1.length + 4 + 9) // select "code here"
    textarea.focus()
  }, 0)
}

 
const descriptionPreview = computed(() => {
  return render(form.description)
})

function submit() {
  form.post('/feedback')
}
</script>

<template>
  <Head title="Create Feedback" />

  <AuthenticatedLayout>
    <template #header>
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-semibold leading-tight text-gray-800">
          Create Feedback
        </h2>
        <Link href="/feedback"
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
        Back to Feedback
        </Link>
      </div>
    </template>

    <div class="py-12">
      <div class="max-w-4xl mx-auto space-y-6 sm:px-6 lg:px-8">
        <div class="p-4 bg-white shadow sm:rounded-lg sm:p-8">
          <div class="space-y-6">
            <div class="pb-4 border-b border-gray-200">
              <h3 class="text-lg font-medium text-gray-900">New Feedback</h3>
              <p class="mt-1 text-sm text-gray-500">
                Share your thoughts, report bugs, or suggest improvements. Markdown is supported in the description.
              </p>
            </div>
            
            <div class="space-y-6">
              
              <div>
                <InputLabel for="title" value="Title" class="text-sm font-medium text-gray-700" />
                <div class="mt-1">
                  <TextInput id="title" type="text"
                    class="block w-full border-gray-300 rounded-md shadow-sm focus:border-black focus:ring-black sm:text-sm"
                    placeholder="Enter a clear and descriptive title" v-model="form.title" required autofocus
                    autocomplete="title" />
                </div>
                <InputError class="mt-2" :message="form.errors.title" />
              </div>
 
              <div>
                <InputLabel for="category" value="Category" class="text-sm font-medium text-gray-700" />
                <div class="mt-1">
                  <select id="category" v-model="form.category"
                    class="block w-full border-gray-300 rounded-md shadow-sm focus:border-black focus:ring-black sm:text-sm"
                    required>
                    <option value="bug">🐛 Bug report</option>
                    <option value="feature">✨ Feature request</option>
                    <option value="improvement">🚀 Improvement</option>
                    <option value="other">💭 Other</option>
                  </select>
                </div>
                <InputError class="mt-2" :message="form.errors.category" />
                <p class="mt-1 text-sm text-gray-500">
                  Select the category that best describes your feedback
                </p>
              </div> 
              <div>
                <InputLabel for="description" value="Description" class="text-sm font-medium text-gray-700" /> 
                <div class="flex items-center justify-between p-2 mt-1 mb-2 border border-gray-200 bg-gray-50 rounded-t-md">
                  <div class="flex gap-1">
                    <button 
                      type="button"
                      class="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-black" 
                      @click="insertBold"
                      title="Bold (Ctrl+B)"
                    >
                      <span class="font-bold">B</span>
                    </button>
                    
                    <button 
                      type="button"
                      class="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-black" 
                      @click="insertItalic"
                      title="Italic (Ctrl+I)"
                    >
                      <span class="italic">I</span>
                    </button>
                    
                    <button 
                      type="button"
                      class="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-black" 
                      @click="insertCode"
                      title="Inline Code"
                    >
                      <span class="font-mono text-xs">&lt;/&gt;</span>
                    </button>
                    
                    <button 
                      type="button"
                      class="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-black" 
                      @click="insertCodeBlock"
                      title="Code Block"
                    >
                      <span class="font-mono text-xs">{ }</span>
                    </button>
                    
                    <button 
                      type="button"
                      class="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-black" 
                      @click="insertLink"
                      title="Link"
                    >
                      🔗
                    </button>
                    
                    <button 
                      type="button"
                      class="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-black" 
                      @click="insertList"
                      title="List"
                    >
                      ≡
                    </button>
                    
                    <button 
                      type="button"
                      class="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-black" 
                      @click="insertHeading"
                      title="Heading"
                    >
                      H
                    </button>
                  </div>
                   
                  <button 
                    type="button"
                    class="inline-flex items-center px-3 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-black" 
                    @click="showPreview = !showPreview"
                  >
                    {{ showPreview ? 'Edit' : 'Preview' }}
                  </button>
                </div>
 
                <div class="relative">
                  <!-- Editor -->
                  <div v-if="!showPreview">
                    <textarea id="description" v-model="form.description" rows="10"
                      class="block w-full font-mono border-gray-300 shadow-sm rounded-b-md focus:border-black focus:ring-black sm:text-sm"
                      :class="{ 'rounded-t-none': true }"
                      placeholder="Provide detailed information about your feedback."
                      @keydown="(e) => { 
                        if (e.ctrlKey || e.metaKey) {
                          if (e.key === 'b') {
                            e.preventDefault();
                            insertBold();
                          } else if (e.key === 'i') {
                            e.preventDefault();
                            insertItalic();
                          }
                        }
                      }"
                    />
                  </div>
                   
                  <div v-else class="min-h-[16rem] p-4 border border-gray-300 rounded-b-md bg-gray-50">
                    <div v-if="form.description.trim()" class="prose text-gray-900 max-w-none" v-html="descriptionPreview"></div>
                    <div v-else class="italic text-gray-500">Nothing to preview... Start typing in the editor to see the formatted result here.</div>
                  </div>
                </div>
                
                <InputError class="mt-2" :message="form.errors.description" />
                <p class="mt-2 text-sm text-gray-500">
                  Use the toolbar buttons or markdown syntax directly. Click Preview to see how it will look.
                </p>
              </div>
            </div>
          </div>
        </div>
 
        <div class="p-4 shadow bg-gray-50 sm:rounded-lg sm:p-6">
          <div class="space-y-3">
            <h4 class="text-sm font-medium text-gray-900">Markdown Quick Reference</h4>
            <div class="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
              <div class="space-y-1">
                <div class="flex justify-between">
                  <span class="text-gray-600">Bold:</span>
                  <code class="text-gray-800">**text**</code>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Italic:</span>
                  <code class="text-gray-800">_text_</code>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Inline Code:</span>
                  <code class="text-gray-800">`code`</code>
                </div>
              </div>
              <div class="space-y-1">
                <div class="flex justify-between">
                  <span class="text-gray-600">Link:</span>
                  <code class="text-gray-800">[text](url)</code>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">List:</span>
                  <code class="text-gray-800">- item</code>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Heading:</span>
                  <code class="text-gray-800">## Title</code>
                </div>
              </div>
              <div class="space-y-1">
                <div class="flex justify-between">
                  <span class="text-gray-600">Code Block:</span>
                  <code class="text-gray-800">```code```</code>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Quote:</span>
                  <code class="text-gray-800">&gt; quote</code>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Line Break:</span>
                  <code class="text-gray-800">Two spaces + Enter</code>
                </div>
              </div>
            </div>
          </div>
        </div>
 
        <div class="p-4 bg-white shadow sm:rounded-lg sm:p-6">
          <div class="flex items-center justify-between">
            <div class="text-sm text-gray-500">
              <p>All fields are required. Your feedback will be reviewed by our team.</p>
            </div>
            <div class="flex items-center gap-3">
              <Link href="/feedback"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
              Cancel
              </Link>
              <button @click="submit" 
                :disabled="form.processing || !form.title.trim() || !form.description.trim()"
                class="inline-flex items-center px-6 py-2 text-sm font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50 disabled:cursor-not-allowed">
                <span v-if="!form.processing">Create Feedback</span>
                <span v-else class="flex items-center">
                  <svg class="w-4 h-4 mr-2 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                    </path>
                  </svg>
                  Creating...
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<style scoped> 
.prose {
  max-width: none;
}

.prose h1 { @apply text-2xl font-bold mt-6 mb-4; }
.prose h2 { @apply text-xl font-bold mt-5 mb-3; }
.prose h3 { @apply text-lg font-bold mt-4 mb-2; }
.prose p { @apply mb-3; }
.prose ul { @apply ml-4 mb-3 list-disc; }
.prose ol { @apply ml-4 mb-3 list-decimal; }
.prose li { @apply mb-1; }
.prose blockquote { @apply border-l-4 border-gray-300 pl-4 italic my-4; }
.prose code { @apply bg-gray-100 px-1 py-0.5 rounded text-sm font-mono; }
.prose pre { @apply bg-gray-100 p-3 rounded overflow-x-auto my-4; }
.prose pre code { @apply bg-transparent p-0; }
.prose a { @apply text-blue-600 hover:text-blue-800 underline; }
.prose strong { @apply font-bold; }
.prose em { @apply italic; }
</style>