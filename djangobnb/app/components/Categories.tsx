import Image from "next/image";

const Categories = () =>{
    return (
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                src="https://raw.githubusercontent.com/EmberDes/Nextjs-Django-Airbnb/main/djangobnb/public/Category-pools.jpg"
                alt= "Category-Pool"
                width ={20}
                height= {20}
                >

                </Image>
                <span className="text-xs">Pools</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                src="https://raw.githubusercontent.com/EmberDes/Nextjs-Django-Airbnb/main/djangobnb/public/Category-pools.jpg"
                alt= "Category-Pool"
                width ={20}
                height= {20}
                >

                </Image>
                <span className="text-xs">Villas</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                src="https://raw.githubusercontent.com/EmberDes/Nextjs-Django-Airbnb/main/djangobnb/public/Category-pools.jpg"
                alt= "Category-Pool"
                width ={20}
                height= {20}
                >

                </Image>
                <span className="text-xs">Cabins</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                src="https://raw.githubusercontent.com/EmberDes/Nextjs-Django-Airbnb/main/djangobnb/public/Category-pools.jpg"
                alt= "Category-Pool"
                width ={20}
                height= {20}
                >

                </Image>
                <span className="text-xs">Tiny-Houses</span>
            </div>
        </div>
    )
}

export default Categories;