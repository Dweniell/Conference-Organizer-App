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
    getArticles(){
        return this.Articles;
    }
    getNrArticles(){
        return this.Articles.count();
    }
    /*
    addConference(Id,Organizer,Name,Articles,Authors,Reviewers){
        conf = new Conference(Id,Organizer,Name,Articles,Authors,Reviewers);
        return conf;
    }
    */
}