import ObjectId from "bson-objectid"
import { Arg, Query, Resolver } from "type-graphql"
import { Service } from "typedi"

import { Trace } from "../../utils/logger/trace.util"
import { GetUserDto } from "./getUser.dto"
import { GetUsersDto } from "./getUsers.dto"
import { UserEntity } from "./user.entity"

@Trace({ logInput: { enabled: true } })
@Service()
@Resolver(() => UserEntity)
export class UserResolver {
  @Query(() => UserEntity, { nullable: true, name: "UserEndpointGetOneUser" })
  async getUser(@Arg("filter") _getUserDto: GetUserDto): Promise<UserEntity> {
    // GetUserDto.fromObject<GetUserDto>(getUserDto)
    return UserEntity.fromObject<UserEntity>({ _id: ObjectId().toHexString() })
  }

  @Query(() => [UserEntity], { nullable: true, name: "UserEndpointGetManyUsers" })
  async getUsers(@Arg("filter") _getUsersDto: GetUsersDto): Promise<UserEntity[]> {
    return [{ _id: ObjectId().toHexString() }, { _id: ObjectId().toHexString() }].map((obj) =>
      UserEntity.fromObject<UserEntity>(obj)
    )
  }
}
