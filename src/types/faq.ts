export interface FAQItem {
  _id: string;
  question: string;
  answer: string | any;
  order?: number;
  category: string;
}
