import React, {useState} from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "d377c86d-0c32-4e1e-83b3-3546220ef607");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Your message submitted successfully!");
        event.target.reset();
        } else {
        setResult(data.message);
        }
    };

  return (
    <div id='contact' className='w-full px-[12%] pt-10 scroll-mt-20 '>
        <h4 className='text-center mb-2 text-lg font-Ovo'>
            Connect with me
        </h4>
        <h2 className='text-center text-5xl font-Ovo mb-8'>
            Get in touch
        </h2>
        <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8'>
                <input type="text" name='name' placeholder='Enter your name' required className='flex-1 p-1 outline-none border-[0.5px] border-gray-400 rounded-md' />
                <input type="email" name='email' placeholder='Enter your email' required className='flex-1 p-1 outline-none border-[0.5px] border-gray-400 rounded-md' />
            </div>
            <textarea rows='6' id="" name='message' placeholder='Enter your message' required
             className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6'></textarea>
            <button type='submit' className='mx-auto w-max px-10 py-3 border border-gray-500 rounded-full flex items-center justify-between hover:bg-amber-300 duration-500'>
                Submit&nbsp;<Image src={assets.sendIcon} alt='' className='w-4' />
            </button>

            <p className='mt-4 text-center text-gray-500 mb-4'>{result}</p>
        </form>
    </div>
  )
}

export default Contact