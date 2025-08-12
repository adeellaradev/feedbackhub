<script setup lang="ts">
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import { useForm, Link } from '@inertiajs/vue3'  
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import { marked } from 'marked';
import DOMPurify from 'dompurify'
import { ref, computed } from 'vue' 

const props = defineProps<{ item: any }>()

marked.setOptions({
  gfm: true,
  breaks: true,
});

const comment = useForm({ content: '', mention_ids: [] as number[] })
const suggestions = ref<{id:number; name:string; email:string}[]>([])
const showSuggest = ref(false)
const showPreview = ref(false)

function render(mdText: string) {
  const html = marked.parse(mdText || '') as string;
  return DOMPurify.sanitize(html)
}

function renderWithMentions(text: string) {
  const replaced = (text || '').replace(/<@(\d+)\|([^>]+)>/g, '[@$2](/users/$1)');
  return render(replaced);
}
 
function insertFormatting(before: string, after: string = '') {
  const textarea = document.getElementById('comment') as HTMLTextAreaElement
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
  
  comment.content = beforeText + newText + afterText
   
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
  const textarea = document.getElementById('comment') as HTMLTextAreaElement
  if (!textarea) return
  
  const start = textarea.selectionStart
  const beforeText = textarea.value.substring(0, start)
  const afterText = textarea.value.substring(start)
  
  const newLine = beforeText.endsWith('\n') || beforeText === '' ? '' : '\n'
  comment.content = beforeText + newLine + '- ' + afterText
  
  setTimeout(() => {
    textarea.setSelectionRange(start + newLine.length + 2, start + newLine.length + 2)
    textarea.focus()
  }, 0)
}

function insertHeading() {
  const textarea = document.getElementById('comment') as HTMLTextAreaElement
  if (!textarea) return
  
  const start = textarea.selectionStart
  const beforeText = textarea.value.substring(0, start)
  const afterText = textarea.value.substring(start)
  
  const newLine = beforeText.endsWith('\n') || beforeText === '' ? '' : '\n'
  comment.content = beforeText + newLine + '## ' + afterText
  
  setTimeout(() => {
    textarea.setSelectionRange(start + newLine.length + 3, start + newLine.length + 3)
    textarea.focus()
  }, 0)
}

async function onKeyup(e: KeyboardEvent) {
  
  const target = e.target as HTMLTextAreaElement 
  const value = target.value
  const at = value.lastIndexOf('@')
  if (at >= 0) {
    const q = value.slice(at + 1).trim()
    if (q.length >= 2) {
      const res = await fetch(`/api/users/search?q=${encodeURIComponent(q)}`)
      suggestions.value = await res.json()
      showSuggest.value = true
    } else {
      showSuggest.value = false
    }
  } else {
    showSuggest.value = false
  }
}

function insertMention(u: {id:number; name:string}) { 
  const content = comment.content
  const atIndex = content.lastIndexOf('@') 
  if (atIndex >= 0) { 
    let queryEnd = atIndex + 1
    while (queryEnd < content.length && 
           content[queryEnd] !== '' && 
           content[queryEnd] !== '\n' && 
           content[queryEnd] !== '\t') {
      queryEnd++
    }
     
    const beforeAt = content.slice(0, atIndex)
    const afterQuery = content.slice(queryEnd) 
    comment.content = beforeAt + `<@${u.id}|${u.name}>` + afterQuery 
    if (!comment.mention_ids.includes(u.id)) {
      comment.mention_ids.push(u.id)
    }
  } 
  showSuggest.value = false 
  setTimeout(() => {
    const textarea = document.getElementById('comment') as HTMLTextAreaElement
    if (textarea) {
      textarea.focus()
    }
  }, 0)
}

function submit() {
  comment.post(`/feedback/${props.item.id}/comments`, {
    preserveScroll: true,
    onSuccess: () => { comment.reset('content','mention_ids') }
  })
}
 
const commentPreview = computed(() => {
  return renderWithMentions(comment.content)
})
</script>

<template>
  <Head :title="item.title" />

  <AuthenticatedLayout> 
    <template #header>
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-semibold leading-tight text-gray-800">
         Feedback Details
        </h2>
        <Link href="/feedback"
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
        Back to Feedback
        </Link>
      </div>
    </template>

    <div class="py-12">
      <div class="mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8"> 
        <div class="p-4 bg-white shadow sm:rounded-lg sm:p-8">
          <div class="space-y-4">
            <div>
              <h1 class="text-2xl font-semibold text-gray-900">{{ item.title }}</h1>
              <div class="flex items-center gap-2 mt-2">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 capitalize">
                  {{ item.category }}
                </span>
                <span class="text-sm text-gray-500">by {{ item.user?.name }}</span>
              </div>
            </div>
            
            <div class="mt-4 prose text-gray-900 max-w-none" v-html="render(item.description)"></div>
          </div>
        </div>

        <div class="p-4 bg-white shadow sm:rounded-lg sm:p-8">
          <div class="space-y-6">
            <div>
              <h2 class="text-xl font-semibold text-gray-900">Comments ({{ item.comments.length }})</h2>
            </div>
 
            <div class="space-y-4" v-if="item.comments.length > 0">
              <div v-for="c in item.comments" :key="c.id" class="p-4 border border-gray-200 rounded-lg">
                <div class="flex items-center justify-between mb-3">
                  <span class="font-extrabold text-md text-gray-1000 ">{{ c.user?.name }}</span>
                  <span class="text-sm gray-500">{{ new Date(c.created_at).toLocaleString() }}</span>
                </div>
                <div class="prose text-gray-600 max-w-none" v-html="renderWithMentions(c.content)"></div>
              </div>
            </div>

            <div v-else class="py-8 text-center">
              <p class="text-gray-500">No comments yet. Be the first to comment!</p>
            </div>
          </div>
        </div>
 
        <div class="p-4 bg-white shadow sm:rounded-lg sm:p-8">
          <div class="space-y-4">
            <div>
              <h3 class="text-lg font-medium text-gray-900">Add Comment</h3>
            </div>

            <div class="space-y-3"> 
              <div class="flex items-center justify-between pb-3 border-b border-gray-200">
                <div class="flex gap-2">
                  <button 
                    type="button"
                    class="inline-flex items-center px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black" 
                    @click="insertBold"
                    title="Bold (Ctrl+B)"
                  >
                    <span class="font-bold">B</span>
                  </button>
                  
                  <button 
                    type="button"
                    class="inline-flex items-center px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black" 
                    @click="insertItalic"
                    title="Italic (Ctrl+I)"
                  >
                    <span class="italic">I</span>
                  </button>
                  
                  <button 
                    type="button"
                    class="inline-flex items-center px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black" 
                    @click="insertCode"
                    title="Code"
                  >
                    <span class="font-mono">&lt;/&gt;</span>
                  </button>
                  
                  <button 
                    type="button"
                    class="inline-flex items-center px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black" 
                    @click="insertLink"
                    title="Link"
                  >
                    🔗
                  </button>
                  
                  <button 
                    type="button"
                    class="inline-flex items-center px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black" 
                    @click="insertList"
                    title="List"
                  >
                    ≡
                  </button>
                  
                  <button 
                    type="button"
                    class="inline-flex items-center px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black" 
                    @click="insertHeading"
                    title="Heading"
                  >
                    H
                  </button>
                </div>
                 
                <button 
                  type="button"
                  class="inline-flex items-center px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black" 
                  @click="showPreview = !showPreview"
                >
                  {{ showPreview ? 'Edit' : 'Preview' }}
                </button>
              </div>
 
              <div class="relative">
                <InputLabel for="comment" value="Comment (Markdown supported)" /> 
                <div v-if="!showPreview" class="relative">
                  <textarea 
                    id="comment"
                    v-model="comment.content" 
                    rows="8" 
                    class="block w-full mt-1 font-mono border-gray-300 rounded-md shadow-sm focus:border-black focus:ring-black sm:text-sm" 
                    placeholder="Write your comment here...    
Use @ to mention users"
                    @keyup="onKeyup"
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
                  <InputError class="mt-2" :message="comment.errors.content" /> 
                  <div v-if="showSuggest" class="absolute z-10 w-full mt-1 overflow-auto bg-white border border-gray-300 rounded-md shadow-lg max-h-48">
                    <div 
                      v-for="u in suggestions" 
                      :key="u.id" 
                      class="px-4 py-2 border-b border-gray-100 cursor-pointer hover:bg-gray-50 last:border-b-0" 
                      @click="insertMention(u)"
                    >
                      <div class="flex items-center justify-between">
                        <span class="font-medium text-gray-900">@{{ u.name }}</span>
                        <span class="text-sm text-gray-500">{{ u.email }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                 
                <div v-else class="mt-1 min-h-[12rem] p-3 border border-gray-300 rounded-md bg-gray-50">
                  <div v-if="comment.content.trim()" class="prose text-gray-900 max-w-none" v-html="commentPreview"></div>
                  <div v-else class="italic text-gray-500">Nothing to preview...</div>
                </div>
              </div>
 
              <div class="flex justify-end">
                <button 
                  @click="submit" 
                  :disabled="comment.processing || !comment.content.trim()" 
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span v-if="!comment.processing">Post Comment</span>
                  <span v-else>Posting...</span>
                </button>
              </div>
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
</style>