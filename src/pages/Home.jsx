import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'
import { Link } from 'react-router-dom'



function Home() {

    const [posts, setPosts] = useState([])


    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div className='w-full py-8 text-center'>
                <Container>
                    <div className='flex justify-center items-center flex-col '>
                        <h1 className='text-4xl font-bold mb-4'>Welcome to MyBlog!</h1>
                        <p className='text-lg text-gray-600 mb-6'>Discover amazing articles written by awesome developers. Login to explore!</p>
                        <img
                            src='/assets/login-illustration.svg'
                            alt='Login Illustration'
                            className='w-64 sm:w-72 md:w-80 lg:w-96 mb-6'
                        />
                        <Link to='/login'
                            className='inline-block px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition'

                        >
                            Login to Read Posts
                        </Link>


                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home
