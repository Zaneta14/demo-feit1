class PostComment {
    id: number;
    accountName: string;
    time: string;
    photoUrl: string;
    comment: string;
}

class Post {
    id: number;
    name: string;        
    location: string;
    headerUrl: string;
    pictureUrl: string;
    longDescription: string;
    likes: number;
    isLiked: boolean;
    button: string;
    isSaved:boolean;
    savebutton: string;
    followers: number;
    following: number;
    pictures: Array<String>;
    follow: String;
    isFollowed: boolean;
}