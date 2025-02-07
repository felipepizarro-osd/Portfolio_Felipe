
const posts = [
    {
        id: 1,
        title: 'BI System for Vicuña Hospital Capstone Project',
        href: '/projects/bi-system-vicuna-hospital',
        description:
            'Monitoring system for management indicators at Vicuña Hospital, allowing users to visualize management indicators in graphical and tabular form, developed using Python for the backend and Vue.js for the frontend.',
        date: 'Jun 20, 2024',
        datetime: '2020-03-16',
        category: { title: 'Engineering, Private Thesis Project', href: '#' },
        author: {
            name: 'Felipe Pizarro',
            role: 'Co-Founder / CTO',
        },
        imageUrl: '/image/projects/thesis.png', // Agregar esta propiedad
        technologies: [  // Agregar esta propiedad
            { name: 'Vue.js', icon: '/image/icons/Vue.js.png' },
            { name: 'Python Flask', icon: '/image/icons/python.png' },
            { name: 'Google drive API', icon: '/image/icons/googleapi.png' },
            { name: 'Mongo DB', icon: '/image/icons/mongodb.png' },
        ],
    },
    {
        id: 2,
        title: 'Inventory System for Pharmacies Personal Project',
        href: '/projects/inventory-system-pharmacies',
        description:
            'Stock review and inventory management system, including suppliers, purchase orders, and sales, developed using .NET for the backend and Next.js for the frontend.',
        date: 'Feb 12, 2022',
        datetime: '2020-03-16',
        category: { title: 'Engineering Health Sector', href: '#' },
        author: {
            name: 'Felipe Pizarro ',
            role: 'Co-Founder / CTO',
        },
        imageUrl: '/image/projects/inventary_app.png', // Agregar esta propiedad
        technologies: [  // Agregar esta propiedad
            { name: 'Next.js', icon: '/image/icons/nextjs.png' },
            { name: 'Fast API', icon: '/image/icons/fastapi.png' },
            { name: 'SQL Server', icon: '/image/icons/sqlserver.png' },
            { name: 'PostgreSQL', icon: '/image/icons/postgresql.png' },
        ],
    },
    {
        id: 3,
        title: 'Portfolio Website Personal Project using Next.js',
        href: '/projects/portfolio-website',
        description:
            'Personal website to showcase my projects and skills, developed using Next.js and Tailwind CSS with other projects inside with trial versions.',
        date: 'Mar 6, 2025',
        datetime: '2020-03-16',
        category: { title: 'Professional brand', href: '#' },
        author: {
            name: 'Felipe Pizarro',
            role: 'Co-Founder / CTO',
        },
        imageUrl: '/image/projects/portfolio.png', // Agregar esta propiedad
        technologies: [  // Agregar esta propiedad
            { name: 'Next.js', icon: '/image/icons/nextjs.png' },
            { name: '.NET', icon: '/image/icons/dotnet.png' },
        ],
    },
    // More posts...
]

export default function Projects() {
    return (
        <div className="bg-white py-32 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl mt-0 text-center mb-10 font-semibold tracking-tight text-gray-900">
            Recent Projects
        </h2>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
                <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                {/* Fecha y categoría */}
                <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                    </time>
                    <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                    {post.category.title}
                    </a>
                </div>

                {/* Imagen del proyecto */}
                <div className="mt-4 w-full aspect-video relative overflow-hidden rounded-lg">
                    <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="object-cover w-full h-full"
                    />
                </div>

                {/* Título y descripción */}
                <div className="group relative">
                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                    </a>
                    </h3>
                    <p className="mt-5 line-clamp-4 text-sm/6 text-gray-600">
                    {post.description}
                    </p>
                </div>

                {/* Tecnologías utilizadas */}
                <div className="mt-6 flex flex-wrap gap-2">
                {post.technologies.map((tech, index) => (
                    <div
                    key={index}
                    className="relative group flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 cursor-help"
                    >
                    <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-10 h-10"
                    />
                    <div className="
                        absolute 
                        z-10 
                        opacity-0 
                        group-hover:opacity-100 
                        transition-opacity 
                        duration-300 
                        -bottom-8 
                        left-1/2 
                        transform 
                        -translate-x-1/2 
                        bg-gray-800 
                        text-white 
                        text-xs 
                        px-3 
                        py-1.5 
                        rounded-md 
                        shadow-lg
                    ">
                        {tech.name}
                        <div className="
                        absolute 
                        top-[-4px] 
                        left-1/2 
                        transform 
                        -translate-x-1/2 
                        rotate-45 
                        w-2 
                        h-2 
                        bg-gray-800
                        "></div>
                    </div>
                    </div>
                ))}
                </div>

                {/* Autor y Botón de Proyecto */}
                <div className="relative mt-8 flex items-center justify-between w-full">
                
                <a 
                    href={post.href} 
                    className="
                    inline-flex 
                    items-center 
                    px-4 
                    py-2 
                    bg-black 
                    text-white 
                    rounded-lg 
                    text-sm 
                    font-medium 
                    hover:bg-gray-800 
                    transition-colors 
                    duration-300 
                    ease-in-out
                    group
                    mx-19
                    "
                >
                    View Project
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                    </svg>
                </a>
                </div>
                </article>
            ))}
            </div>
        </div>
        </div>
    );
}