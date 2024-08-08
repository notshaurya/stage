export interface iStory {
    id: number;
    name: string;
    username: string;
    profileImg: string;
}
export interface iStories {
    stories: iStory[];
}
export interface iOpenStory extends Partial<iStory> {
    isOpen: boolean;
}

export interface iContent {
    id: number;
    content: string;
}

export interface iShowContents {
    id: number;
    content: iContent[];
}
