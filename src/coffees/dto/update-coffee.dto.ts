import { PartialType } from "@nestjs/mapped-types";
import { CreateCoffeeDto } from "./create-coffee.dto.js";

// Use Partial Type to pass Create Coffee Dto's type with all types set to Optional
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {

}
