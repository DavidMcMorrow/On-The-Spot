export interface Room {
    id: number;
    name: string;
    tasks: string[];
    items: string[];
    selectedTab?: string;
    updatedName?: string;
  }