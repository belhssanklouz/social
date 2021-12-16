import UsersList from "../components/userslist";

function Users() {
    const users =[
        {id:'u1', name:'hassen', image:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png', places:5 }
    ];
    return (
        <UsersList items={users} />
    );
}
export default Users;;