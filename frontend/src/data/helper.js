export const domain = 'https://www.courseflick.com';
// export const domain = 'http://192.168.0.95:8003';

// export const check_Image = (Image) => {
    
//     let baseUrl = domain
//     if (Image && Image != '' && typeof Image == "string") {
//         if (Image.indexOf('http') == -1) {
//             return baseUrl + Image;
//         } else if (Image.indexOf('http') == 0) {
//             return Image;
//         }
//     } else {
//         return '/empty-states.png'
//     }
// }




export const check_Image = (Image) => {
    let baseUrl = domain
    if (Image && Image != '' && typeof Image == "string") {
        if (Image.indexOf('https') == -1) {
            return baseUrl + Image;
        } else if (Image.indexOf('https') == 0) {
            return Image;
        }
    } else {
        return '/empty-states.png'
    }
}