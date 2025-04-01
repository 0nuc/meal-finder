import { createClient } from '@supabase/supabase-js'

// Ces valeurs se trouvent dans les paramètres de votre projet Supabase
// Settings > API
const supabaseUrl = 'https://vpvgeexnwgtkuovlknlt.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwdmdlZXhud2d0a3Vvdmxrbmx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0OTI3NTQsImV4cCI6MjA1OTA2ODc1NH0.lZ1mH7w_BCaBkmPk8AP0tN80tzNVelXvjjtF1ZUZdGs'

// Création d'une instance unique du client Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Exemples d'utilisation :
export const supabaseServices = {
  // Authentification
  async signUp(email, password) {
    return await supabase.auth.signUp({ email, password })
  },

  async signIn(email, password) {
    return await supabase.auth.signInWithPassword({ email, password })
  },

  async signOut() {
    return await supabase.auth.signOut()
  },

  // Base de données
  async getRecipes() {
    return await supabase
      .from('recipes')
      .select('*')
  },

  async getUserFavorites(userId) {
    return await supabase
      .from('favorites')
      .select('*')
      .eq('user_id', userId)
  },

  // Stockage (pour les images des recettes par exemple)
  async uploadImage(filePath, file) {
    return await supabase
      .storage
      .from('recipe-images')
      .upload(filePath, file)
  }
}