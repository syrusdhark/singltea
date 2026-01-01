
import { Product, Region, Feature } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Golden Tips',
    price: 45,
    origin: 'Darjeeling',
    flush: 'First Flush',
    notes: ['Floral', 'Muscatel', 'Bright'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9k-Gaq6Xv8F68FtAePUg9OcSQvEh-606Gxh4jVlIMPTWWkikak8bwS1nanLhsoktAdaukRf3_t7cSsZeKc3iDhwbgzoRivPL4W8GwELmOEBrSRGTJY5KJeBA9_NXXPqrVwMx-vH3XBuE_SCRCH8_ogdCvGF7LAoYaLZfEu5tJIvM6HpkDNvgxyB9BxWj_4owF3J-9qp8NRlkpOwAzISGp7oeZkbZ0ZG-oRm4RAU1lTKAqPUIiU1gEMc-zwFyagT9N5kpi34siRoU',
    bestSeller: true,
    category: 'Premium'
  },
  {
    id: 'p2',
    name: 'Assam Bold',
    price: 30,
    origin: 'Assam',
    flush: 'Second Flush',
    notes: ['Malty', 'Strong', 'Rich'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8io90NC66GSd_tndjIZlPAuQbIYfhw8YEjb4NmNAgdre3H5DeQR0A4D3Avc-G9QDoG0R6qQIn-BAL3JBz8ymf5zhqcn3bajqp3dsN64Dhrs8W92CyiHvb2mGqlfNakTtJRUtNOQKgjnm-FZQKGWIs74xyXcpbzzi9t_DoQBXPzy_3BuZgu3KcFoTYYszN6bnR973AZlFAR7a57tfXXc28FsV0Yp_JcCrtxXt2LGdwkOj4hP8CKNFsbGvl7EuygcV2ibyvbELF_ck',
    category: 'Robust'
  },
  {
    id: 'p3',
    name: 'Nilgiri Frost',
    price: 35,
    origin: 'Nilgiri',
    flush: 'Winter Flush',
    notes: ['Crisp', 'Eucalyptus', 'Smooth'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3jx6EG8NkAIukkUOY2BMlXmkhkfdGYepLavGKpDk8Q4jNtN6nqHcVLofQXQHTfpxrxaS8N8o1AWrDi_mZHfYvQ1xSHuOU5VXmjVBTCgdjdNkocngjHk175a6y3UIXOkUAq4LcPGHEm-bGYlLoT6YCHJfo01PmxXf2tFH1mSQ0Cs56F3o0YumF3XJlohLpk9K70MBl8QNvI3pgt3JMiC03-O3MbR9sY13iFDf5GoXlq53roqclhB-NrNuTFFL5qrOvOaO5HRoaVT0',
    category: 'Fresh'
  },
  {
    id: 'p4',
    name: 'Rare Oolong',
    price: 60,
    origin: 'Sikkim',
    flush: 'High Elevation',
    notes: ['Complex', 'Honey', 'Orchid'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLVBLSLXXFeTakob_wl-MieIFCFOpH6Tim9doJJDAU0WvhqJWNcX9Xr4axWRRyil-9E_fH7cRAn-4ApBx12C2vV-UOjEeAQxNEly4hqL8y7i2uPmMgC2zlCF1jO6fpc_2TUlYsmkObtkBlyDOc-1I6coDO5QY81_suQfQlHohReoNSpVOWFCKoU_cIySbGKn3KEV_3SdJUVp1UlYBwLWj299ppb0xN_7SYg_JObAbZNrhkGEtw0M9vP2y6NR9DoJoRI_Vwg3_Mf-I',
    category: 'Limited'
  }
];

export const REGIONS: Region[] = [
  {
    id: 'r1',
    name: 'Darjeeling',
    state: 'West Bengal, India',
    established: '1856',
    description: 'Known as the "Champagne of Teas," our Darjeeling selection is grown in the shadow of Kanchenjunga. The high altitude creates a unique muscatel flavor profile that cannot be replicated anywhere else on Earth.',
    elevation: '6,700 ft',
    harvest: 'First Flush',
    tags: ['Muscatel', 'Spring Harvest', 'Floral'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEKTqpS3ZzvoynMR6Ttr7-SzSyj7ZkVbEQt2gToCiT8j_0y9xFtZc4M9o7pYf1--gkrXUNSCOcaLLx39I5YnIVNkqcU3ck8wmHDwoacQMs6vxOZa6mVd_SA0_JI4GbrGvCrKLJownD3MeDIW1jB90kmR3wHO3ZlGXis2Nmy70TLfOVoVq7voyOKgeAGLj5ELTTAG1yi1BLhTfbl8s8BULBojSHNyIUPogVdQc4OsoAh_RiGSO1O6DMtW1-BrsauShUpVw7X9QvdSA',
    coordinates: { x: '62%', y: '28%' }
  },
  {
    id: 'r2',
    name: 'Assam',
    state: 'Assam, India',
    established: '1823',
    description: 'The world\'s largest tea-growing region. Our Assam estates produce bold, malty teas with deep amber colors, perfect for those who seek a robust morning cup.',
    elevation: '150 ft',
    harvest: 'Second Flush',
    tags: ['Malty', 'Full-Bodied', 'Amber'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARElKBKu05AN582ca9P2ED18sCvWUMdaY3IM5-7Xx_J5-c3S2mYwbLEq7IynUl21qfBJgz-qqZzD7vESAzL9v_tZr5s4xCQp0MHauAibqDG_DWiSLy21R1uze04XfWF-DQEhT4IsJ7NyH4qiAZEdXdcmcn7xsom_9HUjXCZ9vPtHPjQCuLcVzvWgnp_iPDSD5Zsnf_2Sc0jFbpMg6BalWMlPRNjQXSY_2gcMuNeC0Shi_RP9qNlPY86tXb5XyUXjq7EtjPIfJk2L8',
    coordinates: { x: '75%', y: '32%' }
  },
  {
    id: 'r3',
    name: 'Nilgiri',
    state: 'Tamil Nadu, India',
    established: '1859',
    description: 'Nestled in the Blue Mountains of Southern India, these teas are renowned for their intense fragrance and brisk, bright liquor with notes of dusk and frost.',
    elevation: '8,000 ft',
    harvest: 'Winter Flush',
    tags: ['Fragrant', 'Brisk', 'High Altitude'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYt9JAndAtVH8jaHvmNCfCU2nfoKSbdahucYHe9ESyVOgCsw34HNlxIO7CzGJrNypM9T-u2jBHw7YlMBYpL3Q6HV2MguRushPQqaOSpWyrKW51eNHPhct4bYcE8emU7jZctda_VwUlY5Xv_6sdfW3QgbwnVdcaMQ_ZXY6GRrJf7rEJsbZo8SdRjyN8k2RehJlClRIfo_vkYIjs_POonkfu0_U-ctvQif-nLJosRzGJaw3s-8-mdiyPcL-PIKdXz8nwFWnHihRU510',
    coordinates: { x: '35%', y: '75%' }
  }
];

export const FEATURES: Feature[] = [
  {
    id: 'f1',
    title: 'Single Estate Source',
    description: 'Plucked from one garden, preserving unique terroir. We trace every leaf back to its specific patch of earth.',
    icon: 'location_on'
  },
  {
    id: 'f2',
    title: 'Hand-Selected',
    description: 'Only the top two leaves and a bud, harvested by artisans. This traditional method ensures only the tenderest shoots are used.',
    icon: 'spa'
  },
  {
    id: 'f3',
    title: 'High Elevation',
    description: 'Grown at 6000ft for complex, misty flavor profiles. The altitude slows growth, concentrating flavor in every leaf.',
    icon: 'filter_hdr'
  },
  {
    id: 'f4',
    title: 'Sustainable Practice',
    description: 'Zero-waste packaging and earth-friendly farming. We give back to the soil more than we take.',
    icon: 'recycling'
  },
  {
    id: 'f5',
    title: 'Master Blended',
    description: 'Curated by sommeliers with decades of experience. Our blenders ensure consistency in every cup.',
    icon: 'emoji_food_beverage'
  },
  {
    id: 'f6',
    title: 'Fresh to Cup',
    description: 'Vacuum sealed at source to lock in the harvest aroma. Taste the tea as if you were in the garden yourself.',
    icon: 'inventory_2'
  }
];
