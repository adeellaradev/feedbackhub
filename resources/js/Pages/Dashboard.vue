<script setup lang="ts">
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import { Link } from '@inertiajs/vue3'
defineProps<{ feedback: { data: any[], links: any[], meta: any } }>()

</script>

<template>

    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <div class="flex items-center justify-between">
                <h2 class="text-xl font-semibold leading-tight text-gray-800">
                    Feedback
                </h2>
                <Link href="/feedback/create"
                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                New Feedback
                </Link>
            </div>
        </template>

        <div class="py-12">
            <div class="mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">


                <div class="p-4 bg-white shadow sm:rounded-lg sm:p-8">
                    <div class="space-y-6">


                        <div class="pb-4 border-b border-gray-200">
                            <h3 class="text-lg font-medium text-gray-900">All Feedback</h3>
                            <p class="mt-1 text-sm text-gray-500">
                                {{ feedback.data.length }} total feedback items
                            </p>
                        </div>
                        <div v-if="feedback.data.length > 0" class="space-y-4">
                            <div v-for="item in feedback.data" :key="item.id"
                                class="p-6 transition-colors duration-200 border border-gray-200 rounded-lg hover:border-gray-300">
                                <div class="flex items-start justify-between">
                                    <div class="flex-1 min-w-0">
                                        <div class="flex items-center gap-3 mb-2">
                                            <span
                                                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize"
                                                :class="{
                                                    'bg-red-100 text-red-800': item.category === 'bug',
                                                    'bg-blue-100 text-blue-800': item.category === 'feature',
                                                    'bg-green-100 text-green-800': item.category === 'improvement',
                                                    'bg-gray-100 text-gray-800': item.category === 'other'
                                                }">
                                                {{ item.category }}
                                            </span>
                                            <span class="text-sm text-gray-500">
                                                by {{ item.user?.name }}
                                            </span>
                                        </div>

                                        <h3 class="mb-2 text-lg font-medium text-gray-900">
                                            <Link :href="`/feedback/${item.id}`"
                                                class="hover:text-black focus:outline-none focus:underline">
                                            {{ item.title }}
                                            </Link>
                                        </h3>

                                        <div v-if="item.description" class="mb-3 text-sm text-gray-600 line-clamp-2">
                                            {{ item.description.length > 150 ? item.description.substring(0, 150) +
                                            '...' :
                                            item.description }}
                                        </div>

                                        <div class="flex items-center gap-4 text-sm text-gray-500">
                                            <span v-if="item.comments_count !== undefined">
                                                {{ item.comments_count }} comment{{ item.comments_count !== 1 ? 's' : ''
                                                }}
                                            </span>
                                            <span v-if="item.created_at">
                                                {{ new Date(item.created_at).toLocaleDateString() }}
                                            </span>
                                        </div>
                                    </div>

                                    <div class="ml-4">
                                        <Link :href="`/feedback/${item.id}`"
                                            class="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                                        View
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div v-else class="py-12 text-center">
                            <div class="w-12 h-12 mx-auto mb-4 text-gray-400">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <h3 class="mb-1 text-sm font-medium text-gray-900">No feedback yet</h3>
                            <p class="mb-4 text-sm text-gray-500">Get started by creating your first feedback item.</p>
                            <Link href="/feedback/create"
                                class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                            Create Feedback
                            </Link>
                        </div>

                    </div>
                </div>
                <div v-if="feedback.links && feedback.links.length > 3"
                    class="p-4 bg-white shadow sm:rounded-lg sm:p-6">
                    <div class="flex items-center justify-between">
                        <div class="flex justify-between flex-1 sm:hidden">
                            <Link v-if="feedback.links.find(l => l.label.includes('Previous'))"
                                :href="feedback.links.find(l => l.label.includes('Previous'))?.url || ''"
                                class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                            Previous
                            </Link>
                            <Link v-if="feedback.links.find(l => l.label.includes('Next'))"
                                :href="feedback.links.find(l => l.label.includes('Next'))?.url || ''"
                                class="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                            Next
                            </Link>
                        </div>

                        <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                            <div>
                                <p class="text-sm text-gray-700">
                                    Showing
                                    <span class="font-medium">{{ feedback.meta?.from || 1 }}</span>
                                    to
                                    <span class="font-medium">{{ feedback.meta?.to || feedback.data.length }}</span>
                                    of
                                    <span class="font-medium">{{ feedback.meta?.total || feedback.data.length }}</span>
                                    results
                                </p>
                            </div>
                            <div>
                                <nav class="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
                                    aria-label="Pagination">
                                    <Link v-for="link in feedback.links" :key="link.url + link.label"
                                        :href="link.url || ''" :class="[
                                            'relative inline-flex items-center px-4 py-2 border text-sm font-medium',
                                            link.active
                                                ? 'z-10 bg-black border-black text-white'
                                                : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50',
                                            !link.url
                                                ? 'opacity-50 cursor-not-allowed pointer-events-none'
                                                : '',
                                            link.label.includes('Previous')
                                                ? 'rounded-l-md'
                                                : '',
                                            link.label.includes('Next')
                                                ? 'rounded-r-md'
                                                : ''
                                        ]" v-html="link.label" />
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </AuthenticatedLayout>
</template>
