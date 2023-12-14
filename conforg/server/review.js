export class Review{
    ReviewId;
    ReviewContent;
    ReviewerId;
    Approved;

    constructor(ReviewId, ReviewContent, ReviewerId, Approved){
        this.ReviewId=ReviewId;
        this.ReviewContent=ReviewContent;
        this.ReviewerId=ReviewerId;
        this.Approved=Approved;
    }
    editReviewContent(content){
        this.ReviewContent=content;
    }
    getReviewContent(){
        return this.ReviewContent;
    }
    getReviewerId(){
        return this.ReviewerId;
    }
    getApproved(){
        return this.Approved;
    }
}