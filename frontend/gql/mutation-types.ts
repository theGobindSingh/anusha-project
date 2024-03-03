export enum petEnum {
  cat = 1,
  dog = 2
}

export interface VariablesMutationSetNewPet {
  parent: string;
  parentContact: number;
  species: petEnum;
  pictureId: string;
  petage: number;
  email: string;
  location: string;
  breed: string;
  gender: string;
  publishedAt: string;
}

export interface VariablesMutationUploadNewFile {
  file: File;
}

export interface DataMutationUploadNewFile {
  upload: {
    data: {
      id: string;
    };
  };
}
