class Article{
    ArticleId=1;
    Title="This is a title"
    Content="This is a content"
    AuthorId=1;
    ReviewersId;
    UnderReview=false;
    Approved =false;
    constructor(ArticleId, Title, Content, AuthorId, ReviewrsId, UnderReview, Approved){
        this.ArticleId=ArticleId;
        this.Title=Title;
        this.Content=Content;
        this.AuthorId=AuthorId;
        this.ReviewersId=ReviewrsId;
        this.UnderReview=UnderReview;
        this.Approved=Approved;
    }
}