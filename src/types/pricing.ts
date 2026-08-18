export interface VolumeTier {
  minQuantity: number;
  price: number;
}

export interface PricingTier {
  _id: string;
  checkType: 'basic' | 'standard' | 'enhanced';
  displayName: string;
  description?: string;
  price: number;
  volumeTiers?: VolumeTier[];
  features?: string[];
  turnaround?: string;
  popular?: boolean;
  order?: number;
}
