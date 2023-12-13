class Conference{
    Id;
    Name;
    Organizer;
    Articles;
    Authors;
    Reviewers;
    Date;
    constructor(Id,Organizer,Name,Articles,Authors,Reviewers, Date){
        this.Id=Id;
        this.Organizer=Organizer;
        this.Name=Name;
        this.Articles=Articles;
        this.Authors=Authors;
        this.Reviewers=Reviewers;
        this.Date=Date;
    }
    
    //AUTHORS
    addAuthor(Author){
        this.Authors.push(Author);
    }
    getAuthor(AuthorId){
        this.Authors[AuthorId];
    }
    
    
    //REVIEWER
    addReviewer(Reviewer,UserP){
        if(UserP==='O'){
            this.Reviewers.push(Reviewer);
        }
    }
    getReviewer(ReviewerId,UserP){
        if(UserP==='O'){
            return this.Reviewers[ReviewerId];
        }
    }

    //REVIEWS
    addReview(ArticleId, Review, UserP){
        if(UserP==='R'){
            this.Articles[ArticleId].Reviews.push(Review);
        }
    }
    getReview(ArticleId,ReviewId, UserP){
        return this.ArticleId[ArticleId].Reviews[ReviewId];
    }
    deleteReview(ArticleId,ReviewId,UserP){
        if(UserP==='R'||UserP==='O'){
            this.Articles[ArticleId].Reviews[ReviewId].remove();
        }
    }
    editReview(ArticleId,ReviewId,content,UserP){
        if(UserP==='R'||UserP==='O'){
            this.Articles[ArticleId].Reviews[ReviewId].editReviewContent(content);
        }
    }

    //ARTICLES
    addArticle(Article,UserP){
        if(UserP==='A'){
            this.Articles.push(Article)
        }
    }
    getNrArticles(){
        return this.Articles.count();
    }
    getArticles(){
        return this.Articles;
    }
    deleteArticle(ArtId, UserP){
        if(UserP==='A'){
            Articles[ArtId].remove();
        }
    }
    editArticleTitle(ArtId, title, UserP){
        if(UserP==='A'){
            Articles[ArtId].setTitle(title);
        }
    }
    editArticleContent(ArtId,content,UserP){
        if(UserP==='A'){
            Articles[ArtId].setContent(content);
        }
    }
    approveArticle(ArtId){
        Articles[ArtId].setApproved(true);
        Articles[ArtId].setUnderReview(false);
    }
    denyArticle(ArtId){
        Articles[ArtId].setApproved(false);
        Articles[ArtId].setUnderReview(false);
    }

    //STATUSES
    getArticlesStatuses(UserP){
        if(UserP==='O'){
            Statuses;
            for(i in Conferences.length()){
                Statuses.add(Conferences.Articles[i].getUnderReview());
            }
            return Statuses;
        }
    }

    //Return Object
    getObject(){
        return this;
    }

    
    
    
}