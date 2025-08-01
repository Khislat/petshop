import { registerEnumType } from '@nestjs/graphql';
import { register } from 'module';

export enum Message {
	SOMETHING_WENT_WRONG = 'Something went wrong!',
	NO_DATA_FOUND = 'No data is found!',
	CREATE_FAILED = 'Create is failed!',
	UPDATE_FAILED = 'Update is failed!',
	REMOVE_FAILED = 'Remove failed!',
	UPLOAD_FAILED = 'Upload failed',
	BAD_REQUEST = 'Bad Request',

	USED_MEMBER_NICK_OR_PHONE = 'Already used member nick or phone!',
	USED_NICK_PHONE = 'You are inserting already used nick or phone!',
	TOKEN_CREATION_FAILED = 'Token creation error!',
	NO_MEMBER_NICK = 'No member with that mamber nick!',
	BLOCKED_USER = 'You have been blocked, pleace contact with restaurant',
	WRONG_PASSWORD = 'Wrong password, pleace try again!',
	NOT_AUTHENTICATED = 'You are not authenticated, Please login first!',
	ONLY_SPECIFIC_ROLES_ALLOWED = 'Allowed only for members with specific roles!',
	TOKEN_NOT_EXIST = 'Bearer Token is not provided!',
	NOT_ALLOWED_REQUEST = 'Not Allowed Request!',
	PROVIDE_ALLOWED_FORMAT = 'Please provide jpg, jpeg or png images!',
	SELF_SUBSCRIPTION_DENIED = 'Self subscription is denied!',
}

export enum Direction {
	ASC = 1,
	DESC = -1,
}

registerEnumType(Direction, {
	name: 'Direction',
});
