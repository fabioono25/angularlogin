export class Product {
  public name: string;
  public code: string;
  public createdOn: Date;
  public active: boolean;
  public updatedOn: Date;
  public imageUrl: string;
  public description: string;

  constructor(name: string, code: string, createdOn: Date, active: boolean, updatedOn: Date, imageUrl: string, description: string) {
    this.name = name;
    this.code = code;
    this.active = active;
    this.createdOn = createdOn;
    this.updatedOn = updatedOn;
    this.imageUrl = imageUrl;
    this.description = description;
  }
}
