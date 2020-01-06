export class ProfilePayload {
  usersId: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  aboutMe: string;
  profilePicture: {
    id: string;
    fileName: string;
    fileType: string;
    data: Blob;
  };
}
