
export interface menuType { 
    id: number,
    image: string,
    title: string,
    featured: boolean
}

export interface locationType {
    id: string,
    title:string,
    address:string,
    hours:string
}


export interface imageType {
    _ref: string,
    _type: string
}

export interface galleryType {
    _key: string,
    _type: string,
    asset: imageType
}