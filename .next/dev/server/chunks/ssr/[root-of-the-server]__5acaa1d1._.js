module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/data/mock-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "brandStories",
    ()=>brandStories,
    "brands",
    ()=>brands,
    "collections",
    ()=>collections,
    "getBrandBySlug",
    ()=>getBrandBySlug,
    "getCollectionBySlug",
    ()=>getCollectionBySlug,
    "getFeaturedProducts",
    ()=>getFeaturedProducts,
    "getFeaturedStories",
    ()=>getFeaturedStories,
    "getProductById",
    ()=>getProductById,
    "getProductBySlug",
    ()=>getProductBySlug,
    "getProductsByBrand",
    ()=>getProductsByBrand,
    "getStoriesByBrand",
    ()=>getStoriesByBrand,
    "getStoryBySlug",
    ()=>getStoryBySlug,
    "mockConsiderations",
    ()=>mockConsiderations,
    "mockUser",
    ()=>mockUser,
    "products",
    ()=>products
]);
const brands = [
    {
        id: 'dior',
        name: 'Dior',
        slug: 'dior',
        tagline: 'The Art of Elegance Since 1946',
        description: 'Founded by Christian Dior, the House of Dior has been setting the standard for haute couture and ready-to-wear fashion for over seven decades.',
        heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80',
        logoUrl: '/images/brands/dior-logo.svg',
        heritage: {
            founded: 1946,
            founder: 'Christian Dior',
            origin: 'Paris, France',
            story: 'In 1947, Christian Dior revolutionized fashion with his first collection, featuring the iconic "New Look" silhouette that celebrated femininity with its nipped waists and full skirts.'
        },
        collections: [],
        stories: []
    },
    {
        id: 'gucci',
        name: 'Gucci',
        slug: 'gucci',
        tagline: 'Redefining Luxury for the Modern World',
        description: 'From Florence to the world, Gucci represents the pinnacle of Italian craftsmanship combined with contemporary vision.',
        heroImage: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=1920&q=80',
        logoUrl: '/images/brands/gucci-logo.svg',
        heritage: {
            founded: 1921,
            founder: 'Guccio Gucci',
            origin: 'Florence, Italy',
            story: 'Beginning as a small leather goods shop in Florence, Gucci has evolved into one of the world\'s most influential luxury fashion houses.'
        },
        collections: [],
        stories: []
    },
    {
        id: 'bottega-veneta',
        name: 'Bottega Veneta',
        slug: 'bottega-veneta',
        tagline: 'When Your Own Initials Are Enough',
        description: 'Known for its signature intrecciato weave, Bottega Veneta epitomizes understated luxury and exceptional craftsmanship.',
        heroImage: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1920&q=80',
        logoUrl: '/images/brands/bottega-logo.svg',
        heritage: {
            founded: 1966,
            founder: 'Michele Taddei',
            origin: 'Vicenza, Italy',
            story: 'Founded in the Veneto region of Italy, Bottega Veneta has built its reputation on exceptional leather craftsmanship and the iconic intrecciato technique.'
        },
        collections: [],
        stories: []
    },
    {
        id: 'hermes',
        name: 'Hermès',
        slug: 'hermes',
        tagline: 'Artisan Contemporary Since 1837',
        description: 'From equestrian beginnings to global luxury house, Hermès represents the finest in French savoir-faire.',
        heroImage: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1920&q=80',
        logoUrl: '/images/brands/hermes-logo.svg',
        heritage: {
            founded: 1837,
            founder: 'Thierry Hermès',
            origin: 'Paris, France',
            story: 'What began as a harness workshop has become the epitome of French luxury, known for exceptional craftsmanship and timeless design.'
        },
        collections: [],
        stories: []
    },
    {
        id: 'louis-vuitton',
        name: 'Louis Vuitton',
        slug: 'louis-vuitton',
        tagline: 'The Art of Travel',
        description: 'From legendary trunks to contemporary fashion, Louis Vuitton continues to inspire journeys both physical and imaginary.',
        heroImage: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1920&q=80',
        logoUrl: '/images/brands/lv-logo.svg',
        heritage: {
            founded: 1854,
            founder: 'Louis Vuitton',
            origin: 'Paris, France',
            story: 'Louis Vuitton revolutionized travel with innovative flat-topped trunks and has since become a symbol of luxury and refined taste worldwide.'
        },
        collections: [],
        stories: []
    }
];
const products = [
    // Dior Products
    {
        id: 'dior-lady-dior-small',
        brandId: 'dior',
        brandName: 'Dior',
        name: 'Lady Dior Small',
        slug: 'lady-dior-small',
        tagline: 'An Icon of Elegance',
        description: 'The Lady Dior bag, created in 1995, has become a true icon of the House of Dior.',
        narrative: 'In 1995, Lady Diana was presented with this elegant creation, and it quickly became her favorite accessory. The bag\'s clean lines and quilted Cannage pattern reflect the architectural refinement of Dior couture. Each Lady Dior is crafted by skilled artisans who dedicate over 8 hours to creating a single bag.',
        price: 4900,
        currency: 'EUR',
        images: [
            {
                id: 'img1',
                url: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80',
                alt: 'Lady Dior Small Black',
                type: 'hero'
            },
            {
                id: 'img2',
                url: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80',
                alt: 'Lady Dior Detail',
                type: 'detail'
            },
            {
                id: 'img3',
                url: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800&q=80',
                alt: 'Lady Dior Lifestyle',
                type: 'lifestyle'
            }
        ],
        variants: [
            {
                id: 'size-small',
                type: 'size',
                name: 'Small',
                value: 'small',
                available: true
            },
            {
                id: 'size-medium',
                type: 'size',
                name: 'Medium',
                value: 'medium',
                available: true
            },
            {
                id: 'size-large',
                type: 'size',
                name: 'Large',
                value: 'large',
                available: false
            },
            {
                id: 'color-black',
                type: 'color',
                name: 'Black',
                value: '#1A1816',
                available: true
            },
            {
                id: 'color-red',
                type: 'color',
                name: 'Cherry Red',
                value: '#8B2942',
                available: true
            },
            {
                id: 'color-beige',
                type: 'color',
                name: 'Sand Beige',
                value: '#D4CBBF',
                available: true
            }
        ],
        materials: [
            {
                name: 'Lambskin',
                composition: '100% Lambskin leather',
                origin: 'Italy',
                sustainability: 'Responsibly sourced'
            },
            {
                name: 'Metal Hardware',
                composition: 'Palladium-finish metal',
                origin: 'France'
            }
        ],
        craftsmanship: [
            {
                title: 'Cannage Quilting',
                description: 'The signature quilted pattern inspired by Napoleon III chairs',
                duration: '3 hours'
            },
            {
                title: 'Hand Stitching',
                description: 'Each stitch placed with precision by master artisans',
                duration: '4 hours',
                artisans: 2
            },
            {
                title: 'D.I.O.R Charms',
                description: 'Individually crafted letter charms, polished to perfection',
                duration: '1 hour'
            }
        ],
        ivEnabled: true,
        availability: {
            status: 'available',
            quantity: 12,
            regions: [
                {
                    region: 'Europe',
                    city: 'Paris',
                    available: true,
                    confidence: 95,
                    deliveryDays: 3
                },
                {
                    region: 'Europe',
                    city: 'Milan',
                    available: true,
                    confidence: 88,
                    deliveryDays: 4
                },
                {
                    region: 'Asia',
                    city: 'Tokyo',
                    available: true,
                    confidence: 92,
                    deliveryDays: 5
                },
                {
                    region: 'Americas',
                    city: 'New York',
                    available: false,
                    confidence: 15,
                    deliveryDays: 7
                }
            ]
        },
        collection: 'Icons',
        category: 'bags',
        tags: [
            'iconic',
            'heritage',
            'leather',
            'evening'
        ]
    },
    {
        id: 'dior-bar-jacket',
        brandId: 'dior',
        brandName: 'Dior',
        name: 'Bar Jacket',
        slug: 'bar-jacket',
        tagline: 'The New Look, Reimagined',
        description: 'First presented in 1947, the Bar Jacket defined feminine elegance for a generation.',
        narrative: 'The Bar Jacket is the heart of Dior\'s New Look revolution. With its sculpted waist and padded hips, it celebrated feminine curves at a time when fashion was austere. Today\'s interpretation honors this heritage while embracing contemporary tailoring techniques.',
        price: 3200,
        currency: 'EUR',
        images: [
            {
                id: 'img1',
                url: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
                alt: 'Bar Jacket',
                type: 'hero'
            },
            {
                id: 'img2',
                url: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
                alt: 'Bar Jacket Detail',
                type: 'detail'
            }
        ],
        variants: [
            {
                id: 'size-34',
                type: 'size',
                name: 'FR 34',
                value: '34',
                available: true
            },
            {
                id: 'size-36',
                type: 'size',
                name: 'FR 36',
                value: '36',
                available: true
            },
            {
                id: 'size-38',
                type: 'size',
                name: 'FR 38',
                value: '38',
                available: true
            },
            {
                id: 'size-40',
                type: 'size',
                name: 'FR 40',
                value: '40',
                available: true
            },
            {
                id: 'size-42',
                type: 'size',
                name: 'FR 42',
                value: '42',
                available: false
            },
            {
                id: 'color-ivory',
                type: 'color',
                name: 'Ivory',
                value: '#FAF8F5',
                available: true
            },
            {
                id: 'color-black',
                type: 'color',
                name: 'Black',
                value: '#1A1816',
                available: true
            }
        ],
        materials: [
            {
                name: 'Wool-Silk Blend',
                composition: '70% Virgin Wool, 30% Silk',
                origin: 'Italy'
            },
            {
                name: 'Silk Lining',
                composition: '100% Silk',
                origin: 'France'
            },
            {
                name: 'Buttons',
                composition: 'Natural Horn',
                origin: 'France'
            }
        ],
        craftsmanship: [
            {
                title: 'Structured Shoulder',
                description: 'Carefully constructed padding for the signature silhouette',
                duration: '2 hours'
            },
            {
                title: 'Waist Tailoring',
                description: 'Hand-finished darts creating the cinched waist',
                duration: '3 hours',
                artisans: 1
            }
        ],
        ivEnabled: true,
        availability: {
            status: 'available',
            quantity: 8,
            regions: [
                {
                    region: 'Europe',
                    city: 'Paris',
                    available: true,
                    confidence: 98,
                    deliveryDays: 2
                },
                {
                    region: 'Europe',
                    city: 'London',
                    available: true,
                    confidence: 85,
                    deliveryDays: 4
                }
            ]
        },
        collection: 'Autumn/Winter 2024',
        category: 'clothing',
        tags: [
            'tailoring',
            'heritage',
            'occasion',
            'investment'
        ]
    },
    // Gucci Products
    {
        id: 'gucci-jackie-1961',
        brandId: 'gucci',
        brandName: 'Gucci',
        name: 'Jackie 1961',
        slug: 'jackie-1961',
        tagline: 'A Legend Reborn',
        description: 'Originally created in the 1950s, the Jackie bag was renamed in honor of Jacqueline Kennedy Onassis.',
        narrative: 'The Jackie bag embodies Gucci\'s heritage of Italian craftsmanship. Its curved half-moon shape and distinctive piston closure have made it one of the most recognizable bags in fashion history. This modern reinterpretation maintains the classic silhouette while introducing contemporary proportions.',
        price: 2950,
        currency: 'EUR',
        images: [
            {
                id: 'img1',
                url: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
                alt: 'Jackie 1961',
                type: 'hero'
            },
            {
                id: 'img2',
                url: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80',
                alt: 'Jackie Detail',
                type: 'detail'
            }
        ],
        variants: [
            {
                id: 'size-small',
                type: 'size',
                name: 'Small',
                value: 'small',
                available: true
            },
            {
                id: 'size-medium',
                type: 'size',
                name: 'Medium',
                value: 'medium',
                available: true
            },
            {
                id: 'color-black',
                type: 'color',
                name: 'Black',
                value: '#1A1816',
                available: true
            },
            {
                id: 'color-cream',
                type: 'color',
                name: 'Cream',
                value: '#FAF8F5',
                available: true
            },
            {
                id: 'color-brown',
                type: 'color',
                name: 'Cuir',
                value: '#8B6914',
                available: true
            }
        ],
        materials: [
            {
                name: 'Leather',
                composition: '100% Calfskin',
                origin: 'Italy',
                sustainability: 'LWG certified tannery'
            }
        ],
        craftsmanship: [
            {
                title: 'Piston Closure',
                description: 'The signature hardware, individually polished',
                duration: '30 minutes'
            },
            {
                title: 'Edge Painting',
                description: 'Hand-painted edges for a refined finish',
                duration: '1 hour'
            }
        ],
        ivEnabled: true,
        availability: {
            status: 'available',
            quantity: 15,
            regions: [
                {
                    region: 'Europe',
                    city: 'Florence',
                    available: true,
                    confidence: 99,
                    deliveryDays: 3
                },
                {
                    region: 'Europe',
                    city: 'Paris',
                    available: true,
                    confidence: 92,
                    deliveryDays: 3
                }
            ]
        },
        collection: 'Icons',
        category: 'bags',
        tags: [
            'iconic',
            'heritage',
            'everyday',
            'leather'
        ]
    },
    {
        id: 'gucci-horsebit-loafer',
        brandId: 'gucci',
        brandName: 'Gucci',
        name: 'Horsebit Loafer',
        slug: 'horsebit-loafer',
        tagline: 'Equestrian Heritage',
        description: 'The Horsebit loafer, introduced in 1953, features the iconic metal horsebit detail.',
        narrative: 'Drawing from Gucci\'s equestrian heritage, the Horsebit loafer has transcended its origins to become a symbol of refined style. The distinctive metal hardware references the brand\'s roots in saddlery and leather goods.',
        price: 890,
        currency: 'EUR',
        images: [
            {
                id: 'img1',
                url: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&q=80',
                alt: 'Horsebit Loafer',
                type: 'hero'
            }
        ],
        variants: [
            {
                id: 'size-38',
                type: 'size',
                name: 'IT 38',
                value: '38',
                available: true
            },
            {
                id: 'size-39',
                type: 'size',
                name: 'IT 39',
                value: '39',
                available: true
            },
            {
                id: 'size-40',
                type: 'size',
                name: 'IT 40',
                value: '40',
                available: true
            },
            {
                id: 'size-41',
                type: 'size',
                name: 'IT 41',
                value: '41',
                available: true
            },
            {
                id: 'color-black',
                type: 'color',
                name: 'Black',
                value: '#1A1816',
                available: true
            },
            {
                id: 'color-brown',
                type: 'color',
                name: 'Cognac',
                value: '#8B4513',
                available: true
            }
        ],
        materials: [
            {
                name: 'Leather',
                composition: '100% Calfskin',
                origin: 'Italy'
            },
            {
                name: 'Hardware',
                composition: 'Antique gold-finish metal',
                origin: 'Italy'
            }
        ],
        craftsmanship: [
            {
                title: 'Blake Stitch Construction',
                description: 'Traditional Italian shoemaking technique',
                duration: '4 hours'
            }
        ],
        ivEnabled: true,
        availability: {
            status: 'available',
            quantity: 20,
            regions: [
                {
                    region: 'Europe',
                    city: 'Florence',
                    available: true,
                    confidence: 95,
                    deliveryDays: 3
                }
            ]
        },
        collection: 'Icons',
        category: 'shoes',
        tags: [
            'iconic',
            'classic',
            'everyday',
            'leather'
        ]
    },
    // Bottega Veneta Products
    {
        id: 'bottega-cassette',
        brandId: 'bottega-veneta',
        brandName: 'Bottega Veneta',
        name: 'Cassette Bag',
        slug: 'cassette-bag',
        tagline: 'Intrecciato Evolved',
        description: 'A modern interpretation of Bottega Veneta\'s iconic intrecciato technique.',
        narrative: 'The Cassette represents the evolution of Bottega Veneta\'s signature craft. The oversized intrecciato weave creates a contemporary silhouette while honoring decades of artisanal expertise. Each bag requires strips of leather to be meticulously woven by hand.',
        price: 3200,
        currency: 'EUR',
        images: [
            {
                id: 'img1',
                url: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80',
                alt: 'Cassette Bag',
                type: 'hero'
            }
        ],
        variants: [
            {
                id: 'size-small',
                type: 'size',
                name: 'Small',
                value: 'small',
                available: true
            },
            {
                id: 'size-medium',
                type: 'size',
                name: 'Medium',
                value: 'medium',
                available: true
            },
            {
                id: 'color-black',
                type: 'color',
                name: 'Black',
                value: '#1A1816',
                available: true
            },
            {
                id: 'color-green',
                type: 'color',
                name: 'Bottega Green',
                value: '#2D5A27',
                available: true
            },
            {
                id: 'color-caramel',
                type: 'color',
                name: 'Caramel',
                value: '#C68642',
                available: true
            }
        ],
        materials: [
            {
                name: 'Nappa Leather',
                composition: '100% Nappa lambskin',
                origin: 'Italy',
                sustainability: 'Carbon neutral production'
            }
        ],
        craftsmanship: [
            {
                title: 'Intrecciato Weaving',
                description: 'Over 100 strips of leather hand-woven',
                duration: '6 hours',
                artisans: 1
            }
        ],
        ivEnabled: true,
        availability: {
            status: 'available',
            quantity: 10,
            regions: [
                {
                    region: 'Europe',
                    city: 'Milan',
                    available: true,
                    confidence: 94,
                    deliveryDays: 3
                }
            ]
        },
        collection: 'Core',
        category: 'bags',
        tags: [
            'signature',
            'contemporary',
            'leather',
            'everyday'
        ]
    },
    // Hermès Products
    {
        id: 'hermes-birkin-30',
        brandId: 'hermes',
        brandName: 'Hermès',
        name: 'Birkin 30',
        slug: 'birkin-30',
        tagline: 'The Ultimate Symbol of Luxury',
        description: 'Created in 1984 for Jane Birkin, this bag has become the most coveted accessory in the world.',
        narrative: 'Legend has it that Jean-Louis Dumas, then chairman of Hermès, sat next to Jane Birkin on a flight. As she struggled with her bag, he sketched the design that would become the Birkin. Each bag is crafted by a single artisan over 18-25 hours.',
        price: 9500,
        currency: 'EUR',
        images: [
            {
                id: 'img1',
                url: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800&q=80',
                alt: 'Birkin 30',
                type: 'hero'
            }
        ],
        variants: [
            {
                id: 'size-25',
                type: 'size',
                name: 'Birkin 25',
                value: '25',
                available: false
            },
            {
                id: 'size-30',
                type: 'size',
                name: 'Birkin 30',
                value: '30',
                available: true
            },
            {
                id: 'size-35',
                type: 'size',
                name: 'Birkin 35',
                value: '35',
                available: false
            },
            {
                id: 'color-noir',
                type: 'color',
                name: 'Noir',
                value: '#1A1816',
                available: true
            },
            {
                id: 'color-gold',
                type: 'color',
                name: 'Gold',
                value: '#C9A962',
                available: false
            },
            {
                id: 'color-etoupe',
                type: 'color',
                name: 'Etoupe',
                value: '#8B7355',
                available: true
            }
        ],
        materials: [
            {
                name: 'Togo Leather',
                composition: '100% Calfskin with natural grain',
                origin: 'France'
            },
            {
                name: 'Hardware',
                composition: 'Palladium-plated metal',
                origin: 'France'
            }
        ],
        craftsmanship: [
            {
                title: 'Single Artisan',
                description: 'One craftsperson creates the entire bag',
                duration: '18-25 hours',
                artisans: 1
            },
            {
                title: 'Saddle Stitching',
                description: 'Traditional technique using two needles',
                duration: '8 hours'
            },
            {
                title: 'Sangles',
                description: 'Hand-crafted closure straps',
                duration: '2 hours'
            }
        ],
        ivEnabled: false,
        availability: {
            status: 'limited',
            quantity: 2,
            regions: [
                {
                    region: 'Europe',
                    city: 'Paris',
                    available: true,
                    confidence: 60,
                    deliveryDays: 14
                }
            ],
            restockDate: '2024-03-01'
        },
        collection: 'Icons',
        category: 'bags',
        tags: [
            'iconic',
            'investment',
            'heritage',
            'exclusive'
        ]
    },
    {
        id: 'hermes-silk-scarf',
        brandId: 'hermes',
        brandName: 'Hermès',
        name: 'Carré Silk Scarf',
        slug: 'carre-silk-scarf',
        tagline: 'A Canvas of Dreams',
        description: 'The Hermès silk scarf, or Carré, is a masterpiece of design and craftsmanship.',
        narrative: 'Since 1937, Hermès has produced these wearable works of art. Each design takes up to two years to develop, and the printing process requires up to 45 screens for a single scarf. The silk comes from Brazilian farms, woven in Lyon, and printed in Hermès\' own workshops.',
        price: 450,
        currency: 'EUR',
        images: [
            {
                id: 'img1',
                url: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&q=80',
                alt: 'Silk Scarf',
                type: 'hero'
            }
        ],
        variants: [
            {
                id: 'size-70',
                type: 'size',
                name: '70cm',
                value: '70',
                available: true
            },
            {
                id: 'size-90',
                type: 'size',
                name: '90cm',
                value: '90',
                available: true
            },
            {
                id: 'design-equestrian',
                type: 'color',
                name: 'Brides de Gala',
                value: 'equestrian',
                available: true
            },
            {
                id: 'design-jungle',
                type: 'color',
                name: 'Jungle Love',
                value: 'jungle',
                available: true
            }
        ],
        materials: [
            {
                name: 'Silk Twill',
                composition: '100% Mulberry silk',
                origin: 'Brazil/France',
                sustainability: 'Sustainable silk farming'
            }
        ],
        craftsmanship: [
            {
                title: 'Design',
                description: 'Up to 2 years of artistic development',
                duration: '24 months'
            },
            {
                title: 'Screen Printing',
                description: 'Up to 45 colors, each requiring a separate screen',
                duration: '6 hours'
            },
            {
                title: 'Hand Rolling',
                description: 'Edges rolled and stitched by hand',
                duration: '30 minutes'
            }
        ],
        ivEnabled: true,
        availability: {
            status: 'available',
            quantity: 50,
            regions: [
                {
                    region: 'Europe',
                    city: 'Paris',
                    available: true,
                    confidence: 99,
                    deliveryDays: 2
                },
                {
                    region: 'Global',
                    city: 'Worldwide',
                    available: true,
                    confidence: 95,
                    deliveryDays: 5
                }
            ]
        },
        collection: 'Accessories',
        category: 'accessories',
        tags: [
            'silk',
            'art',
            'heritage',
            'gift'
        ]
    },
    // Louis Vuitton Products
    {
        id: 'lv-speedy-25',
        brandId: 'louis-vuitton',
        brandName: 'Louis Vuitton',
        name: 'Speedy 25 Bandoulière',
        slug: 'speedy-25',
        tagline: 'Travel in Style',
        description: 'A compact version of the iconic Keepall, the Speedy has been a Louis Vuitton icon since 1930.',
        narrative: 'The Speedy was born from the desire to create a smaller, city-friendly version of the Keepall travel bag. Audrey Hepburn was famously photographed carrying her Speedy, cementing its place in fashion history. The Bandoulière version adds a practical crossbody strap.',
        price: 1480,
        currency: 'EUR',
        images: [
            {
                id: 'img1',
                url: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80',
                alt: 'Speedy 25',
                type: 'hero'
            }
        ],
        variants: [
            {
                id: 'size-20',
                type: 'size',
                name: 'Speedy 20',
                value: '20',
                available: true
            },
            {
                id: 'size-25',
                type: 'size',
                name: 'Speedy 25',
                value: '25',
                available: true
            },
            {
                id: 'size-30',
                type: 'size',
                name: 'Speedy 30',
                value: '30',
                available: true
            },
            {
                id: 'canvas-mono',
                type: 'color',
                name: 'Monogram',
                value: 'monogram',
                available: true
            },
            {
                id: 'canvas-damier',
                type: 'color',
                name: 'Damier Ebene',
                value: 'damier',
                available: true
            }
        ],
        materials: [
            {
                name: 'Canvas',
                composition: 'Coated canvas with cowhide trim',
                origin: 'France/Spain'
            },
            {
                name: 'Hardware',
                composition: 'Brass with gold-color finish',
                origin: 'France'
            }
        ],
        craftsmanship: [
            {
                title: 'Pattern Alignment',
                description: 'Monogram perfectly aligned across seams',
                duration: '2 hours'
            },
            {
                title: 'Leather Trim',
                description: 'Vachetta leather that develops patina over time',
                duration: '1 hour'
            }
        ],
        ivEnabled: true,
        availability: {
            status: 'available',
            quantity: 25,
            regions: [
                {
                    region: 'Europe',
                    city: 'Paris',
                    available: true,
                    confidence: 98,
                    deliveryDays: 2
                },
                {
                    region: 'Global',
                    city: 'Worldwide',
                    available: true,
                    confidence: 90,
                    deliveryDays: 5
                }
            ]
        },
        collection: 'Icons',
        category: 'bags',
        tags: [
            'iconic',
            'heritage',
            'everyday',
            'canvas'
        ]
    }
];
const collections = [
    {
        id: 'dior-aw24',
        name: 'Autumn/Winter 2024',
        slug: 'autumn-winter-2024',
        season: 'Autumn/Winter',
        year: 2024,
        description: 'A celebration of Dior\'s tailoring heritage with contemporary vision.',
        heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80',
        products: products.filter((p)=>p.brandId === 'dior')
    },
    {
        id: 'gucci-icons',
        name: 'Gucci Icons',
        slug: 'gucci-icons',
        season: 'Timeless',
        year: 2024,
        description: 'The enduring pieces that define Gucci\'s heritage.',
        heroImage: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=1920&q=80',
        products: products.filter((p)=>p.brandId === 'gucci')
    },
    {
        id: 'hermes-classics',
        name: 'Hermès Classics',
        slug: 'hermes-classics',
        season: 'Timeless',
        year: 2024,
        description: 'Masterpieces of French savoir-faire.',
        heroImage: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1920&q=80',
        products: products.filter((p)=>p.brandId === 'hermes')
    }
];
const brandStories = [
    {
        id: 'lady-dior-story',
        brandId: 'dior',
        title: 'The Lady Dior Legacy',
        slug: 'lady-dior-legacy',
        type: 'heritage',
        excerpt: 'How a bag created for a princess became an eternal icon of elegance.',
        heroImage: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1920&q=80',
        publishedAt: '2024-01-15',
        readTime: 8,
        relatedProducts: [
            'dior-lady-dior-small'
        ],
        content: [
            {
                type: 'text',
                content: 'In 1995, a bag was created that would become inseparable from one of the most photographed women in the world. When First Lady Bernadette Chirac presented Princess Diana with a black Dior bag during a visit to Paris, neither could have known they were participating in fashion history.'
            },
            {
                type: 'image',
                content: 'The original Lady Dior, 1995',
                mediaUrl: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1200&q=80'
            },
            {
                type: 'text',
                content: 'Princess Diana was so taken with the bag that she ordered it in every color. She carried it constantly, from royal engagements to casual outings, cementing its status as the ultimate symbol of refined elegance.'
            },
            {
                type: 'quote',
                content: '"The Lady Dior is not just a bag—it is a declaration of timeless elegance."',
                caption: '— Maria Grazia Chiuri, Creative Director'
            },
            {
                type: 'text',
                content: 'The bag\'s design draws inspiration from the Napoleon III chairs that Christian Dior loved, their caned seats inspiring the now-iconic Cannage pattern. Each bag requires over eight hours of meticulous handwork.'
            }
        ]
    },
    {
        id: 'gucci-jackie-story',
        brandId: 'gucci',
        title: 'Jackie: A Fashion Romance',
        slug: 'jackie-fashion-romance',
        type: 'heritage',
        excerpt: 'The story of how Jacqueline Kennedy Onassis gave her name to fashion history.',
        heroImage: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1920&q=80',
        publishedAt: '2024-02-01',
        readTime: 6,
        relatedProducts: [
            'gucci-jackie-1961'
        ],
        content: [
            {
                type: 'text',
                content: 'Originally known simply as the Gucci Constance, this curved hobo bag was created in the 1950s. But it wasn\'t until Jacqueline Kennedy Onassis made it her constant companion that it achieved legendary status.'
            },
            {
                type: 'text',
                content: 'Photographers captured her carrying the bag everywhere—shopping, traveling, attending events. By the 1970s, it had been renamed in her honor, a rare tribute to a living style icon.'
            }
        ]
    },
    {
        id: 'hermes-craftsmanship',
        brandId: 'hermes',
        title: 'Inside the Hermès Atelier',
        slug: 'hermes-atelier',
        type: 'craftsmanship',
        excerpt: 'A journey into the workshops where dreams become reality.',
        heroImage: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1920&q=80',
        publishedAt: '2024-01-20',
        readTime: 10,
        relatedProducts: [
            'hermes-birkin-30',
            'hermes-silk-scarf'
        ],
        content: [
            {
                type: 'text',
                content: 'In the quiet workshops of Hermès, time moves differently. Here, a single artisan may spend their entire career perfecting one craft—be it leather stitching, silk printing, or enamel work.'
            },
            {
                type: 'text',
                content: 'Each Birkin bag is crafted by a single artisan from start to finish, a process that takes between 18 and 25 hours. This is not manufacturing—this is creation.'
            },
            {
                type: 'quote',
                content: '"We don\'t make bags. We create companions for life."',
                caption: '— Master Artisan, Hermès'
            }
        ]
    },
    {
        id: 'bottega-intrecciato',
        brandId: 'bottega-veneta',
        title: 'The Art of Intrecciato',
        slug: 'art-of-intrecciato',
        type: 'craftsmanship',
        excerpt: 'How a weaving technique became the signature of silent luxury.',
        heroImage: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=1920&q=80',
        publishedAt: '2024-02-10',
        readTime: 7,
        relatedProducts: [
            'bottega-cassette'
        ],
        content: [
            {
                type: 'text',
                content: 'In the Veneto region of Italy, artisans have practiced the intrecciato weave for generations. This technique involves weaving thin strips of leather together without visible stitching, creating a supple, distinctive texture.'
            },
            {
                type: 'text',
                content: 'The phrase "When your own initials are enough" captures Bottega Veneta\'s philosophy perfectly. The intrecciato pattern is so recognizable that no logo is needed—those who know, know.'
            }
        ]
    }
];
const mockUser = {
    id: 'user-1',
    email: 'sophia@example.com',
    name: 'Sophia Chen',
    fashionIdentity: {
        occasions: [
            'professional',
            'social-events',
            'art-cultural'
        ],
        aesthetics: [
            'classic-timeless',
            'minimal-structured'
        ],
        confidenceLevel: 'guided',
        budgetRange: {
            min: 500,
            max: 5000
        },
        primaryLocation: 'Paris',
        travelDestinations: [
            'Milan',
            'Tokyo',
            'New York'
        ],
        bodyTwin: {
            id: 'bt-1',
            silhouette: 'average'
        }
    },
    wardrobe: [
        {
            id: 'w1',
            productId: 'dior-bar-jacket',
            product: products.find((p)=>p.id === 'dior-bar-jacket'),
            addedAt: '2024-09-15',
            wearCount: 12,
            lastWorn: '2024-12-20',
            outfitCompatibility: [
                'gucci-horsebit-loafer'
            ]
        }
    ],
    considerations: [],
    orders: []
};
const mockConsiderations = [
    {
        id: 'c1',
        productId: 'dior-lady-dior-small',
        product: products.find((p)=>p.id === 'dior-lady-dior-small'),
        addedAt: '2024-12-27',
        selectedVariants: {
            size: 'small',
            color: 'Black'
        },
        agiNote: 'This bag complements your wardrobe beautifully. It would pair well with the Bar Jacket you own.'
    },
    {
        id: 'c2',
        productId: 'gucci-horsebit-loafer',
        product: products.find((p)=>p.id === 'gucci-horsebit-loafer'),
        addedAt: '2024-12-26',
        selectedVariants: {
            size: '38',
            color: 'Black'
        },
        agiNote: 'A versatile classic that transitions from office to evening effortlessly.'
    }
];
function getBrandBySlug(slug) {
    return brands.find((b)=>b.slug === slug);
}
function getProductBySlug(slug) {
    return products.find((p)=>p.slug === slug);
}
function getProductById(id) {
    return products.find((p)=>p.id === id);
}
function getProductsByBrand(brandId) {
    return products.filter((p)=>p.brandId === brandId);
}
function getStoryBySlug(slug) {
    return brandStories.find((s)=>s.slug === slug);
}
function getStoriesByBrand(brandId) {
    return brandStories.filter((s)=>s.brandId === brandId);
}
function getCollectionBySlug(slug) {
    return collections.find((c)=>c.slug === slug);
}
function getFeaturedProducts() {
    return products.slice(0, 6);
}
function getFeaturedStories() {
    return brandStories.slice(0, 3);
}
}),
"[project]/src/components/layout/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mock-data.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function Header() {
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSearchOpen, setIsSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 right-0 z-50 bg-ivory-cream/95 backdrop-blur-sm border-b border-sand/30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1800px] mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden lg:flex justify-center py-2 border-b border-sand/20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs tracking-[0.2em] text-stone uppercase",
                        children: "Experience-First Luxury Commerce"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-6 lg:px-12 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsMenuOpen(!isMenuOpen),
                            className: "lg:hidden p-2 -ml-2",
                            "aria-label": "Toggle menu",
                            children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 30,
                                columnNumber: 27
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 30,
                                columnNumber: 45
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden lg:flex items-center gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "text-sm tracking-[0.1em] uppercase text-charcoal-warm hover:text-noir transition-colors py-2",
                                            children: "Brand Universes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 36,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white shadow-lg rounded-lg p-6 min-w-[280px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs tracking-[0.15em] uppercase text-greige mb-4",
                                                        children: "Explore Our Maisons"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Header.tsx",
                                                        lineNumber: 41,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brands"].map((brand)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `/brand/${brand.slug}`,
                                                                className: "block text-charcoal-deep hover:text-gold-muted transition-colors",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-display text-lg",
                                                                    children: brand.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/Header.tsx",
                                                                    lineNumber: 49,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, brand.id, false, {
                                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                                lineNumber: 44,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Header.tsx",
                                                        lineNumber: 42,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 40,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/discover",
                                    className: "text-sm tracking-[0.1em] uppercase text-charcoal-warm hover:text-noir transition-colors",
                                    children: "Discover"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/collection/autumn-winter-2024",
                                    className: "text-sm tracking-[0.1em] uppercase text-charcoal-warm hover:text-noir transition-colors",
                                    children: "Collections"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "absolute left-1/2 -translate-x-1/2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-display text-2xl lg:text-3xl tracking-[0.15em] uppercase text-noir",
                                children: "ModaGlimmora"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 lg:gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsSearchOpen(!isSearchOpen),
                                    className: "p-2 text-charcoal-warm hover:text-noir transition-colors",
                                    "aria-label": "Search",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/consideration",
                                    className: "p-2 text-charcoal-warm hover:text-noir transition-colors relative",
                                    "aria-label": "Considerations",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute -top-1 -right-1 w-4 h-4 bg-gold-muted text-noir text-[10px] rounded-full flex items-center justify-center",
                                            children: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/profile",
                                    className: "hidden lg:flex p-2 text-charcoal-warm hover:text-noir transition-colors",
                                    "aria-label": "Account",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                isSearchOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-full left-0 right-0 bg-white shadow-lg p-6 animate-fade-in",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-2xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "What are you looking for today?",
                                        className: "input-luxury text-center text-lg",
                                        autoFocus: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 116,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-center text-sm text-stone mt-4",
                                        children: 'Try: "Evening bag for gallery opening" or "Classic structured jacket"'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 115,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsSearchOpen(false),
                                className: "absolute top-4 right-4 text-stone hover:text-noir",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 130,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 126,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 114,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 113,
                    columnNumber: 11
                }, this),
                isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-slide-up",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "p-6 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs tracking-[0.15em] uppercase text-greige mb-4",
                                        children: "Brand Universes"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 141,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 pl-4",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brands"].map((brand)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/brand/${brand.slug}`,
                                                className: "block font-display text-xl text-charcoal-deep",
                                                onClick: ()=>setIsMenuOpen(false),
                                                children: brand.name
                                            }, brand.id, false, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 144,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 142,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 140,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-sand/30 pt-6 space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/discover",
                                        className: "block text-sm tracking-[0.1em] uppercase text-charcoal-warm",
                                        onClick: ()=>setIsMenuOpen(false),
                                        children: "Discover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 156,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/collection/autumn-winter-2024",
                                        className: "block text-sm tracking-[0.1em] uppercase text-charcoal-warm",
                                        onClick: ()=>setIsMenuOpen(false),
                                        children: "Collections"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 163,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/profile",
                                        className: "block text-sm tracking-[0.1em] uppercase text-charcoal-warm",
                                        onClick: ()=>setIsMenuOpen(false),
                                        children: "My Profile"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 170,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/wardrobe",
                                        className: "block text-sm tracking-[0.1em] uppercase text-charcoal-warm",
                                        onClick: ()=>setIsMenuOpen(false),
                                        children: "My Wardrobe"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 177,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 155,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 139,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 138,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Header.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/layout/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mock-data.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-charcoal-deep text-ivory-cream",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1800px] mx-auto px-6 lg:px-12 py-16 lg:py-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-display text-2xl tracking-[0.15em] uppercase mb-6",
                                        children: "ModaGlimmora"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 14,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-taupe text-sm leading-relaxed mb-6",
                                        children: "The world's first AGI-native fashion universe. Experience-first luxury commerce that understands you."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 17,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs tracking-[0.2em] uppercase text-stone",
                                        children: '"Fashion doesn\'t guess here — intelligence guides."'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 20,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 13,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xs tracking-[0.2em] uppercase text-taupe mb-6",
                                        children: "Brand Universes"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 27,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brands"].map((brand)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/brand/${brand.slug}`,
                                                    className: "text-sand hover:text-ivory-cream transition-colors",
                                                    children: brand.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 33,
                                                    columnNumber: 19
                                                }, this)
                                            }, brand.id, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 32,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 30,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xs tracking-[0.2em] uppercase text-taupe mb-6",
                                        children: "Experience"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/discover",
                                                    className: "text-sand hover:text-ivory-cream transition-colors",
                                                    children: "Discover"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 50,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/collection/autumn-winter-2024",
                                                    className: "text-sand hover:text-ivory-cream transition-colors",
                                                    children: "Collections"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 55,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/story/lady-dior-legacy",
                                                    className: "text-sand hover:text-ivory-cream transition-colors",
                                                    children: "Stories & Heritage"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 60,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/onboarding",
                                                    className: "text-sand hover:text-ivory-cream transition-colors",
                                                    children: "Create Fashion Identity"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 65,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xs tracking-[0.2em] uppercase text-taupe mb-6",
                                        children: "Your Space"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/profile",
                                                    className: "text-sand hover:text-ivory-cream transition-colors",
                                                    children: "My Profile"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 79,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/wardrobe",
                                                    className: "text-sand hover:text-ivory-cream transition-colors",
                                                    children: "Digital Wardrobe"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 84,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/consideration",
                                                    className: "text-sand hover:text-ivory-cream transition-colors",
                                                    children: "Considerations"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 89,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/profile/orders",
                                                    className: "text-sand hover:text-ivory-cream transition-colors",
                                                    children: "Orders"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 94,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Footer.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-charcoal-warm/30 mt-16 pt-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row justify-between items-center gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap justify-center md:justify-start gap-6 text-xs text-stone",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/privacy",
                                            className: "hover:text-ivory-cream transition-colors",
                                            children: "Privacy Policy"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/terms",
                                            className: "hover:text-ivory-cream transition-colors",
                                            children: "Terms of Service"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 110,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/authenticity",
                                            className: "hover:text-ivory-cream transition-colors",
                                            children: "Authenticity Guarantee"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/sustainability",
                                            className: "hover:text-ivory-cream transition-colors",
                                            children: "Sustainability"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-stone",
                                    children: "© 2024 ModaGlimmora. All rights reserved."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Footer.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Footer.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-noir py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1800px] mx-auto px-6 lg:px-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-xs tracking-[0.15em] text-stone",
                        children: "Powered by AGI Intelligence • No Dark Patterns • Privacy First"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Footer.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Footer.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Footer.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Footer.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/shared/AGIConcierge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AGIConcierge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
'use client';
;
;
;
const initialMessages = [
    {
        id: '1',
        role: 'assistant',
        content: 'Welcome to ModaGlimmora. I\'m your Fashion Intelligence guide. How may I assist you in discovering something exceptional today?'
    }
];
const suggestions = [
    'Show me evening bags',
    'What would suit a gallery opening?',
    'Tell me about Dior heritage',
    'Help me complete an outfit'
];
function AGIConcierge() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialMessages);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const handleSend = ()=>{
        if (!input.trim()) return;
        const userMessage = {
            id: Date.now().toString(),
            role: 'user',
            content: input
        };
        setMessages([
            ...messages,
            userMessage
        ]);
        setInput('');
        // Simulate AI response
        setTimeout(()=>{
            const responses = {
                'evening': 'For evening occasions, I would suggest exploring our Lady Dior collection. The small size in black leather is particularly elegant for gallery openings and dinner events. Would you like me to show you the story behind this iconic piece?',
                'gallery': 'A gallery opening calls for understated elegance. Based on your interest, I recommend pieces that balance artistic expression with sophistication. The Dior Bar Jacket paired with statement accessories would create a memorable impression.',
                'dior': 'Dior\'s heritage is one of revolutionary elegance. Founded in 1946 by Christian Dior, the house introduced the "New Look" that transformed post-war fashion. Would you like to explore our heritage stories or see iconic pieces?',
                'outfit': 'I\'d be happy to help you complete an outfit. Could you tell me more about the occasion and any pieces you already have in mind? I can suggest complementary items from our collections.'
            };
            const responseKey = Object.keys(responses).find((key)=>input.toLowerCase().includes(key));
            const aiMessage = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: responseKey ? responses[responseKey] : 'I understand you\'re looking for something special. Let me help you explore our curated collections. You might enjoy starting with our Brand Universes to discover pieces that resonate with your style.'
            };
            setMessages((prev)=>[
                    ...prev,
                    aiMessage
                ]);
        }, 1000);
    };
    const handleSuggestion = (suggestion)=>{
        setInput(suggestion);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: `fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-charcoal-deep text-ivory-cream' : 'bg-gold-muted text-noir hover:bg-gold-deep'}`,
                "aria-label": "Toggle AI Concierge",
                children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    size: 24
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/AGIConcierge.tsx",
                    lineNumber: 85,
                    columnNumber: 19
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                    size: 24
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/AGIConcierge.tsx",
                    lineNumber: 85,
                    columnNumber: 37
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/shared/AGIConcierge.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-xl overflow-hidden animate-slide-up",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-r from-charcoal-deep to-sapphire-deep p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-full bg-gold-muted/20 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        size: 20,
                                        className: "text-gold-soft"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/AGIConcierge.tsx",
                                        lineNumber: 95,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/AGIConcierge.tsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-ivory-cream font-display text-lg",
                                            children: "Fashion Intelligence"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shared/AGIConcierge.tsx",
                                            lineNumber: 98,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-taupe",
                                            children: "Your personal style guide"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shared/AGIConcierge.tsx",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/shared/AGIConcierge.tsx",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shared/AGIConcierge.tsx",
                            lineNumber: 93,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/AGIConcierge.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[320px] overflow-y-auto p-4 space-y-4 bg-ivory-cream",
                        children: messages.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `max-w-[85%] p-3 rounded-2xl ${message.role === 'user' ? 'bg-charcoal-deep text-ivory-cream rounded-br-sm' : 'bg-white text-charcoal-deep rounded-bl-sm shadow-sm'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm leading-relaxed",
                                        children: message.content
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/AGIConcierge.tsx",
                                        lineNumber: 118,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/AGIConcierge.tsx",
                                    lineNumber: 111,
                                    columnNumber: 17
                                }, this)
                            }, message.id, false, {
                                fileName: "[project]/src/components/shared/AGIConcierge.tsx",
                                lineNumber: 107,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/AGIConcierge.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this),
                    messages.length <= 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-2 bg-parchment border-t border-sand/30",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-stone mb-2",
                                children: "Try asking:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/AGIConcierge.tsx",
                                lineNumber: 127,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: suggestions.map((suggestion, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleSuggestion(suggestion),
                                        className: "text-xs px-3 py-1.5 bg-white text-charcoal-warm rounded-full hover:bg-sand/30 transition-colors",
                                        children: suggestion
                                    }, index, false, {
                                        fileName: "[project]/src/components/shared/AGIConcierge.tsx",
                                        lineNumber: 130,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/AGIConcierge.tsx",
                                lineNumber: 128,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/AGIConcierge.tsx",
                        lineNumber: 126,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-white border-t border-sand/30",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: input,
                                    onChange: (e)=>setInput(e.target.value),
                                    onKeyDown: (e)=>e.key === 'Enter' && handleSend(),
                                    placeholder: "Ask me anything...",
                                    className: "flex-1 px-4 py-2.5 bg-parchment border-none rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gold-muted/50"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/AGIConcierge.tsx",
                                    lineNumber: 145,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSend,
                                    disabled: !input.trim(),
                                    className: "w-10 h-10 rounded-full bg-charcoal-deep text-ivory-cream flex items-center justify-center hover:bg-noir transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/AGIConcierge.tsx",
                                        lineNumber: 158,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/AGIConcierge.tsx",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shared/AGIConcierge.tsx",
                            lineNumber: 144,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/AGIConcierge.tsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/AGIConcierge.tsx",
                lineNumber: 90,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5acaa1d1._.js.map