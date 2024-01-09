export default function App() {
  return (
    <div className="max-w-screen-xl mx-auto my-auto">
      {/* NARBAR */}
    <div className="custom-screen py-3 flex items-center justify-between md:py-5">
      <img
          src="https://starboard-one.vercel.app/starboard.svg"
          alt=""
          className=""
        />
       <div className="py-2.5 px-4 text-center rounded-lg font-medium text-sm text-white bg-gray-800">
          <button>Get started</button>
      </div>
      </div>
      {/* HERO */}
      <div className="py-28">
    <div className=" flex items-center justify-between">
      <div className=" flex-none space-y-5 max-w-2xl">
        <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl">A Powerful Project Management Desktop App</h1>
        <p className="">With complete software that enables your teams to interact, plan, evaluate,
       and manage daily activities, you can break down large projects, quickly, and easily.</p>
      <div className=" flex gap-5">
       <input className="pl-12 pr-3 focus:border-sky-500 px-3 py-2 text-gray-500 bg-transparent outline-none border shadow-sm rounded-lg" type="text" name="" placeholder="Enter your email"></input>
       <button className="block w-full mt-3 text-white bg-sky-500 hover:bg-sky-600 sm:w-auto sm:mt-0 px-4 py-2.5 font-medium text-sm text-center rounded-lg">Try for free</button>
      </div>
    </div>
      <img className="w-full rounded-xl border shadow-lg md:max-w-2xl" src="https://starboard-one.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdesktop-app-prview.7f00f8fa.png&w=1080&q=75"  ></img>
      </div>
      </div>
      {/* STAT */}
      <div className="py-20 sm:py-28 ">
      <div className="custom-screen text-center ">
      <div className="max-w-2xl md:mx-auto">
        <h2 className="text-3xl text-gray-800 font-semibold sm:text-4xl ">Cut your project management time by 50% and start focusing on what</h2>
        <p className="mt-3 text-gray-600" >Starboard is a comprehensive project management software that captures the entire project lifecycle, from backlog to release. 
            With a variety of features like real-time reporting, Kanban layouts and more</p>
        <button className="bg-sky-500 rounded-lg py-2.5 px-4 inline-block font-medium text-sm text-white mt-4">Try for free</button>
      <div className="custom-screen flex justify-center sm:block inline-grid grid-cols-2 gap-7 items-center justify-center sm:flex">
      <div className="py-20 sm:py-28 ">
        <p className="text-4xl text-gray-800 font-semibold">90K</p>
        <p className="mt-3 text-gray-600 font-medium">Active user</p>
      </div>
      <div>
        <p className="text-4xl text-gray-800 font-semibold">120K</p>
        <p className="mt-3 text-gray-600 font-medium">Total Sales</p>
      </div>
      <div>
        <p className="text-4xl text-gray-800 font-semibold">25+</p>
        <p className="mt-3 text-gray-600 font-medium">Countries</p>
      </div>
      <div>
        <p className="text-4xl text-gray-800 font-semibold">2.5M+</p>
        <p className="mt-3 text-gray-600 font-medium">Total revenue</p>
      </div>
            </div>
            </div>
            </div>
            </div>
            {/* PROJECT */}
            <div className="py-20 sm:py-28">
        <div className="">
            <div className="max-w-2xl space-y-3">
                <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">Never miss a beat with Easy Projects</h2>
                <p>Feeling overwhelmed with the lack of time and resources? With Starboard, 
                you'll never have to worry about your team's productivity again!</p>
            </div>
            <div className="py-20 sm:py-28 ">
                <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                    <li className="flex gap-x-5">
                        <div className="w-8 h-8 text-sky-500 flex-none  border flex items-center justify-center rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg>  
                        </div>
                        <div>
                            <h3 className="text-lg text-gray-800 font-medium">Task Management</h3>
                            <p className="">Stay organized and meet deadlines 5x faster with task management.</p>
                        </div>
                    </li>
                    <li className="flex gap-x-5">
                        <div className="w-8 h-8 text-sky-500 flex-none  border flex items-center justify-center rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg>  
                        </div>
                        <div>
                            <h3 className="text-lg text-gray-800 font-medium" >Team Collaboration</h3>
                            <p>Collaborate with your team to ensure project accountability and transparency.</p>
                        </div>
                    </li>
                    <li className="flex gap-x-5">
                        <div className="w-8 h-8 text-sky-500 flex-none  border flex items-center justify-center rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg>  
                        </div>
                        <div>
                            <h3 className="text-lg text-gray-800 font-medium">Tracking</h3>
                            <p>Link time spent tracking to tasks from your desktop.</p>
                        </div>
                    </li>
                    <li className="flex gap-x-5">
                        <div className="w-8 h-8 text-sky-500 flex-none  border flex items-center justify-center rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg>  
                        </div>
                        <div>
                            <h3 className="text-lg text-gray-800 font-medium">Reporting</h3>
                            <p>Access detailed reporting for time tracked and automatically create reports</p>
                        </div>
                    </li >
                    <li className="flex gap-x-5">
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg>  
                        </div>
                        <div>
                            <h3 className="text-lg text-gray-800 font-medium">Meeting management</h3>
                            <p>You can set meeting agenda, record discussion points, and more.</p>
                        </div>
                    </li>
                    <li className="flex gap-x-5">
                        <div className="w-8 h-8 text-sky-500 flex-none  border flex items-center justify-center rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg>  
                        </div>
                        <div>
                            <h3 className="text-lg text-gray-800 font-medium">Timesheets</h3>
                            <p>Manage and track your remote team’s time.</p>
                        </div>
                    </li>
                </ul>
            </div>
      </div>
      </div>
      {/* TRIAL */}
      <div className="py-20 sm:py-28"> 
            <div className="custom-screen flex flex-col-reverse gap-x-12 justify-between md:flex-row md:items-center">
            <div className="flex-none max-w-xl space-y-3">
            <h2 className="text-3xl font-semibold text-gray-800  sm:text-4xl">Get a free trial today and start making progress!</h2>
            <p className="text-gray-600">Starboard is a comprehensive project management software that captures the entire project lifecycle, from backlog to release. With a variety of features. 
                Allow your teams to collaborate effectively on projects and stay on top of deadlines.</p>
                <button className="bg-sky-500 rounded-lg py-2.5 px-4 inline-block font-medium text-sm text-white">Get free trial</button>
            </div>
            <div>
                <img src="https://starboard-one.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcta-img.41d94ab4.png&w=640&q=75"></img>
            </div>
        </div>
        </div>
        {/* BUY */}
        <div>
        <div className="relative max-w-2xl mx-auto sm:text-center">
            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">Buy once, use forever.</h2>
            <p>Starboard is a quality product that will last a lifetime, 
                so you never have to buy again.</p>
        </div>
        <div className="mt-12 space-y-6 justify-center gap-6 sm:flex sm:space-y-0">
            <div className="h-full p-8 gap-y-4 flex flex-col items-stretch rounded-xl border shadow-lg bg-white">
                <p className="font-medium text-sky-500">Hobby</p>
                <p className="text-3xl font-semibold text-gray-800">$0 /mo</p>
                <p className="max-w-sm">For small teams between 4-7 people focused on collaboration.</p> 
                <button className="block w-full text-white bg-sky-500 px-4 py-2.5 font-medium text-sm text-center rounded-lg">Get Stared</button>
            </div>
            <div className="h-full p-8 gap-y-4 flex flex-col items-stretch rounded-xl border shadow-lg bg-gray-800 text-gray-300 ">
                <p className="font-medium text-sky-500">Startup</p>
                <p className="text-3xl font-semibold text-gray-800">$32 /mo</p>
                <p className="max-w-sm">For large teams with more security, support, 
                    and performance needs, and much more.</p>  
                <button className="block w-full text-white bg-sky-500 px-4 py-2.5 font-medium text-sm text-center rounded-lg">Get Stared</button>
            </div>
       </div>
       </div>
       {/* FB */}
       <div className="py-20 sm:py-28">
            <div className="max-w-2xl">
                <h2 className="text-3xl text-gray-800 font-semibold sm:text-4xl">Loved by the best enterprises</h2>
                <p className="mt-3 text-gray-600">Listen to what our customers are saying about the product</p>
            </div>
            <div className="mt-12">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-gray-50 p-4 rounded-xl">
                        <div className="flex items-center gap-x-4">
                            <img src="https://starboard-one.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjonathan.49b041d4.webp&w=3840&q=75" alt="" className="w-14 h-14 rounded-full object-cover"/>
                            <div>
                                <p className="text-gray-800 font-semibold">Jonathen tapas</p>
                                <p className="text-gray-600 text-sm mt-0.5">Founder of saleMore</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-4">
                            <p>Great value and so easy to use and saves me so much time! 
                                I was shocked by how much time and brain energy it saved me. S
                                imple & easy...gotta love that.</p>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                        <div className="flex items-center gap-x-4">
                            <img src="https://starboard-one.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frahole.23313e3c.webp&w=3840&q=75" alt="" className="w-14 h-14 rounded-full object-cover"/>
                            <div>
                                <p className="text-gray-800 font-semibold">Rahole titane</p>
                                <p className="text-gray-600 text-sm mt-0.5">Team leader</p>
                            </div>
                        </div>
                        <div>
                            <p>I've been using Starboard for a couple of months now and it has really 
                                helped me with my project management skills.
                                It's perfect for anyone who prefers the simpler route in life.</p>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                        <div className="flex items-center gap-x-4">
                            <img src="https://starboard-one.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjoric.9795b86c.webp&w=3840&q=75" alt="" className="w-14 h-14 rounded-full object-cover"/>
                            <div>
                                <p className="text-gray-800 font-semibold">Joric toral</p>
                                <p className="text-gray-600 text-sm mt-0.5">IT manager</p>
                            </div>
                        </div>
                        <div>
                            <p>We're using Starboard to manage our entire project, and it's been truly incredible! From the way it's easy to create new tasks and organize your team.</p>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                        <div className="flex items-center gap-x-4">
                            <img src="https://starboard-one.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Falexandru.a3d3c922.webp&w=3840&q=75" alt="" className="w-14 h-14 rounded-full object-cover"/>
                            <div>
                                <p className="text-gray-800 font-semibold">Alexandru</p>
                                <p className="text-gray-600 text-sm mt-0.5">Project manager</p>
                            </div>
                        </div>
                        <div>
                            <p>I am a project manager and I have used a number of different project management software. 
                                Spent over $100,000 on tools that frankly did not work for me.</p>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                        <div className="flex items-center gap-x-4">
                            <img src="https://starboard-one.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flyna.1c2d779e.webp&w=3840&q=75" alt="" className="w-14 h-14 rounded-full object-cover"/>
                            <div>
                                <p className="text-gray-800 font-semibold">Lyna igore</p>
                                <p className="text-gray-600 text-sm mt-0.5">CTO of bankLine</p>
                            </div>
                        </div>
                        <div>
                            <p>I have had the opportunity to work with Starboard on a number of projects and it's been one of the best experiences 
                                I have had, so I highly recommend this software.</p>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                        <div className="flex items-center gap-x-4">
                            <img src="https://starboard-one.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftony.18628255.webp&w=3840&q=75" alt="" className="w-14 h-14 rounded-full object-cover"/>
                            <div>
                                <p className="text-gray-800 font-semibold">Tony justin</p>
                                <p>IT manager</p>
                            </div>
                        </div>
                        <div>
                            <p>I started as a project manager and now help plan out all our marketing campaigns. 
                                The thing that really keeps me coming back is their support.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-20 sm:py-28 ">
            <div className="max-w-xl mx-auto custom-screen text-center">
                <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">Let’s get started now</h2>
                <p className="mt-3 text-gray-600">Work with a project management software that's easy and fun to use.</p>
                <div className="space-y-3 gap-3 justify-center items-center mt-4 sm:flex sm:space-y-0">
                    <button className="py-2.5 px-4 font-medium text-center rounded-lg inline-block text-sm text-white bg-sky-500 hover:bg-sky-600 shadow rounded-lg w-full">Get started</button>
                    <button className="py-2.5 px-4 font-medium text-center rounded-lg inline-block text-sm text-gray-800 hover:bg-gray-50 rounded-lg border w-full">Contact us</button>
                </div>
            </div>
            </div>
            <footer>
            <div className="custom-screen py-10 mt-20 border-t text-center text-gray-600 sm:mt-28">
            <p>© 2023 Starboard. All rights reserved.</p>
            </div>
            </footer>
        </div>

      </div>
  )
}