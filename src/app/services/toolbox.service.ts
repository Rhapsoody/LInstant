import { Injectable } from '@angular/core';
import { PostgrestResponse, SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from 'src/environment/environment';
import { Picture } from '../models/picture.model';

@Injectable({
  providedIn: 'root'
})
export class ToolboxService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    )
  }

  async getImages(): Promise<Picture[]> {
    try {
      const { data, error }: PostgrestResponse<Picture> = await this.supabase
        .from('pics_gallery')
        .select('*');

      if (error) {
        console.error('Erreur lors de la récupération des images:', error);
        return [];
      }

      return data || [];
    } catch (e) {
      console.error('Une erreur inattendue s\'est produite:', e);
      return [];
    }
  }
}
