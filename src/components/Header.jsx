import Profile_img from '../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center py-3 border-b-2'>
            <h3 className='text-2xl font-bold'>Knowledge Cafe</h3>
            <img src={Profile_img} alt="" />
        </div>
    )
}

export default Header;