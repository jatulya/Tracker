export interface TopbarProps {
    name: string
    profilePicture: string
  }

export interface TrackerPage {
    name: string
    icon: JSX.Element
    href: string
    component: JSX.Element
  }

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
  
  
  