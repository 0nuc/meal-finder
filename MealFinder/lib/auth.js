// lib/auth.js
import { supabase } from './supabase';

export const authService = {
  async signIn(email, password) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        return { error: error.message };
      }

      return { data, error: null };
    } catch (error) {
      return { error: 'Une erreur est survenue' };
    }
  }
}