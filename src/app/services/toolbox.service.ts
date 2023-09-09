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
        console.error('OH IMAGE MAL RECUPEREE', error);
        return [];
      }

      return data || [];
    } catch (e) {
      console.error('HOOO PROBLEME CHELOU SUR LA REQUETE', e);
      return [];
    }
  }

  async addImage(imageUrl: string) {
    try {
      const { data, error } = await this.supabase
        .from('pics_gallery')
        .insert(
          {
            url: imageUrl
          }
        );

      if (error) {
        console.error('BRUH IMAGE PAS AJOUTEE', error);
        return null;
      }

      return data && data[0];
    } catch (e) {
      console.error('BRUH PROBLEME CHELOU SUR LA REQUETE', e);
      return null;
    }
  }
}
