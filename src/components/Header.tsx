import images from '../constants/images'

export default function Header() {
  return (
    <div className="bg-blue-400 w-full fixed flex justify-between items-center box-border px-10">
        <div>
            <img className='h-20' src={images.mainLogo}/>
        </div>
        <div>
            <ul className='flex'>
                <li>Home</li>
                <li>Services</li>
                <li>About Us</li>
            </ul>
        </div>
    </div>
  );
}
