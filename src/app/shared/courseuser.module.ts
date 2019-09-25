export class CourseUser
{
    public courseName:string;
    public courseDetail:string;
    public imageUrl:string;
    public price :number;
    public category:string;
    public courseUrl:string;
    public courseId:number;
    public userId :string;

    

    constructor(courseId:number,courseName:string,category:string,courseDetails:string,price:number,courseUrl:string,imageUrl:string,userId:string)
    {
        this.courseName=courseName;
        this.courseDetail=courseDetails;
        this.imageUrl=imageUrl;
        this.price=price;
        this.category=category;
        this.courseUrl=courseUrl;
        this.userId =userId;
        this.courseId=courseId;
         
        
    }
}