import { ref, onMounted, onUnmounted } from 'vue'

export function useIntersectionObserver(options = {}) {
  const isIntersecting = ref(false)
  const target = ref(null)
  let observer

  onMounted(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window && target.value) {
      observer = new window.IntersectionObserver(([entry]) => {
        isIntersecting.value = entry.isIntersecting
      }, options)
      observer.observe(target.value)
    }
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return { isIntersecting, target }
}