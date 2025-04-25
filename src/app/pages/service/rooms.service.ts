import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ophkdszpvenzwsxdltwc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9waGtkc3pwdmVuendzeGRsdHdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzMTczNjIsImV4cCI6MjA2MDg5MzM2Mn0.pHhk8vs5u00HdURQSB1hZFLsn2f91ZDl0Ythh_B50Y8';

@Injectable({ providedIn: 'root' })
export class RoomsService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
        detectSessionInUrl: false
      },
    });
  }

  async addRoom(room: any) {
    return this.supabase.from('rooms').insert([room]);
  }

  async getRooms() {
    const { data, error } = await this.supabase.from('rooms').select('*');
    if (error) throw error;
    return data;
  }
}
