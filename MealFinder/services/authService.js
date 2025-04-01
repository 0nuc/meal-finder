import { PrismaClient } from '@prisma/client'
import { supabase } from './supabaseClient'

const prisma = new PrismaClient()

export const authService = {
  async signUp({ email, password, name }) {
    try {
      // Créer l'utilisateur dans Supabase
      const { user, error } = await supabase.auth.signUp({
        email,
        password
      })

      if (error) throw error

      // Créer l'utilisateur dans notre base de données
      const newUser = await prisma.user.create({
        data: {
          id: user.id,
          email,
          password, // Dans un vrai projet, hashez le mot de passe
          name
        }
      })

      return newUser
    } catch (error) {
      throw error
    }
  },

  async login({ email, password }) {
    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error) throw error

      const dbUser = await prisma.user.findUnique({
        where: { email }
      })

      return dbUser
    } catch (error) {
      throw error
    }
  }
}