import { defineCodeRunnersSetup } from '@slidev/types'

export default defineCodeRunnersSetup(() => {
  return {
    html(code, ctx) {
      // Ici, tu peux utiliser une vraie lib de sanitization si besoin
      return {
        html: code, // ou sanitizeHtml(code) si tu veux filtrer
      }
    },
    css(code, ctx) {
      // Retourne le CSS pour l'injecter dans un <style>
      return {
        css: code,
      }
    },
    // Ajoute d'autres languages si besoin
  }
})

// Optionnel : ta fonction de sanitization si tu veux la garder
function sanitizeHtml(code: string): string {
  // Simple HTML sanitizer, à adapter selon tes besoins
  return code.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, '')
}