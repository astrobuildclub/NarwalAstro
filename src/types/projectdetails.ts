export interface Media {
  coverImage: string | null;
}

export interface Details {
  color?: string | null;
  coverMedia?: boolean;
  intro?: string;
  media?: Media;
  subtitle?: string | null;
  title?: string;
  clients?: any;
}