export const BG_IMG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web/IN-en-20250331-TRIFECTA-perspective_247b6f06-c36d-4dff-a8eb-4013325c3f8e_large.jpg";
export const LOGO_URL = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const PROFILE_IMG_URL = "https://occ-0-2464-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png";

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+import.meta.env.VITE_TMDB_API_KEY
    }
  };

  export const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w500/";
  export const LANGUAGE_OPTIONS = [
    {value:"english", text:"English"},
    {value:"hindi", text:"Hindi"}
  ]

  export const OPENAI_KEY = import.meta.env.VITE_OPENAI_KEY;
  