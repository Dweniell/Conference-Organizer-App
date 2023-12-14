export class Article{
    ArticleId=1;
    Title="This is a title"
    Content="This is a content"
    AuthorId=1;
    Reviews;
    UnderReview=false;
    Approved =false;
    constructor(ArticleId, Title, Content, AuthorId, Reviews, UnderReview, Approved){
        this.ArticleId=ArticleId;
        this.Title=Title;
        this.Content=Content;
        this.AuthorId=AuthorId;
        this.Reviews=Reviews;
        this.UnderReview=UnderReview;
        this.Approved=Approved;
    }
    
    //Content
    setContent(Content){
        this.Content=Content;
    }
    getContent(){
        return this.Content;
    }

    //title
    editTitle(Title){
        this.Title=Title;
    }
    getTitle(){
        return this.Title;
    }

    //UnderReview
    setUnderReview(UnderReview){
        this.UnderReview=UnderReview;
    }
    getUnderReview(){
        return this.UnderReview;
    }

    //Approved
    setApproved(Approved){
        this.Approved=Approved;
    }
    getApproved(){
        return this.UnderReview;
    }

    getReviews(){
        return this.Reviews;
    }
}