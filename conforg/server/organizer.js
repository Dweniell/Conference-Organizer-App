class Organizer {
    Id;
    Conferences;
    constructor(Id){
        this.Id=Id
    }
    get Id(){
        return this.Id;
    }
    getArticlesStatus(ConfId){
        Statuses;
        for(i in Conferences[ConfId].getNrArticles()){
            Statuses.add(Conferences[ConfId].Articles[i]);
        }
        return Statuses;
    }
    deleteArticle(ConfId, ArticleId){
        this.Conferences[ConfId].Articles[ArticleId].remove();
    }
    
};