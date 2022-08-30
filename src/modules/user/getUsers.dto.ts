import { Expose } from "class-transformer"
import { IsMongoId } from "class-validator"
import { Field, ID, InputType } from "type-graphql"

import { DTOBase } from "../../utils/dto/base.dto"

@InputType("UserEndpointGetUsersDto")
export class GetUsersDto extends DTOBase {
  @Field(() => [ID])
  @IsMongoId({ each: true })
  @Expose()
  _ids: string[]
}
