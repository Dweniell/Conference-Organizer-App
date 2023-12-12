class Conference{
    Id;
    Name;
    Organizer;
    Articles;
    Authors;
    Reviewers;
    constructor(Id,Organizer,Name,Articles,Authors,Reviewers){
        this.Id=Id;
        this.Organizer=Organizer;
        this.Name=Name;
        this.Articles=Articles;
        this.Authors=Authors;
        this.Reviewers=Reviewers;
    }
    
    //AUTHORS
    addAuthor(Author){
        this.Authors.push(Author);
    }
    getAuthor(AuthorId){
        this.Authors[AuthorId];
    }
    
    //REVIEWER
    addReviewer(Reviewer){
        this.Reviewers.push(Reviewer);
    }
    getReviewer(ReviewerId){
        return this.Reviewers[ReviewerId];
    }

    //REVIEWS
    addReview(ArticleId, Review){
        this.Articles[ArticleId].Reviews.push(Review);
    }
    getReview(ArticleId,ReviewId){
        return this.ArticleId[ArticleId].Reviews[ReviewId];
    }
    deleteReview(ArticleId,ReviewId){
        this.Articles[ArticleId].Reviews[ReviewId].remove();
    }
    editReview(ArticleId,ReviewId,content){
        this.Articles[ArticleId].Reviews[ReviewId].editReviewContent(content);
    }

    //ARTICLES
    addArticle(Article){
        this.Articles.push(Article)
    }
    getNrArticles(){
        return this.Articles.count();
    }
    getArticles(){
        return this.Articles;
    }
    deleteArticle(ArtId){
        Articles[ArtId].remove();
    }
    editArticleTitle(ArtId, title){
        Articles[ArtId].setTitle(title);
    }
    editArticleContent(ArtId,content){
        Articles[ArtId].setContent(content);
    }
    approveArticle(ArtId,Approved){
        Articles[ArtId].setApproved(Approved);
        Articles[ArtId].setUnderReview(false);
    }
    denyArticle(ArtId,Approved){
        Articles[ArtId].setApproved(Approved);
        Articles[ArtId].setUnderReview(false);
    }


    /*
    addConference(Id,Organizer,Name,Articles,Authors,Reviewers){
        conf = new Conference(Id,Organizer,Name,Articles,Authors,Reviewers);
        return conf;
    }
    */
}