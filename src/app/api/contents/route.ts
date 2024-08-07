import { NextRequest, NextResponse } from "next/server";

// To handle a POST request to /api
export async function POST(request: NextRequest) {
    const { id } = await request.json();
    const content = [
        [
            {
                id: 1,
                content:
                    "https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
            },
            {
                id: 2,
                content:
                    "https://images.unsplash.com/photo-1544894079-e81a9eb1da8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
            },
            {
                id: 3,
                content:
                    "https://plus.unsplash.com/premium_photo-1682091872078-46c5ed6a006d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
            },
            {
                id: 4,
                content:
                    "https://images.unsplash.com/photo-1712652056542-58ca6baac1d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
            },
            {
                id: 5,
                content:
                    "https://images.unsplash.com/photo-1710609845812-9546e39dba46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
            },
        ],
        [
            {
                id: 1,
                content:
                    "https://images.unsplash.com/photo-1720884413532-59289875c3e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
            },
            {
                id: 2,
                content:
                    "https://images.unsplash.com/photo-1721132447246-5d33f3008b05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
            },
            {
                id: 3,
                content:
                    "https://images.unsplash.com/photo-1709884732294-ac35fa831eb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
            },
            {
                id: 4,
                content:
                    "https://images.unsplash.com/photo-1673297180075-411992cad941?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
            },
            {
                id: 5,
                content:
                    "https://plus.unsplash.com/premium_photo-1683910767554-7508927ef89f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
            },
        ],
        [
            {
                id: 1,
                content:
                    "https://images.unsplash.com/photo-1710609942195-b9dab8f48fc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
            },
            {
                id: 2,
                content:
                    "https://images.unsplash.com/photo-1709884735206-295d326752c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
            },
            {
                id: 3,
                content:
                    "https://images.unsplash.com/photo-1611697522020-f44d4e818698?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
            },
            {
                id: 4,
                content:
                    "https://plus.unsplash.com/premium_photo-1684445034763-013f0525c40c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
            },
            {
                id: 5,
                content:
                    "https://images.unsplash.com/photo-1721889282786-782faab40d25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
            },
        ],
        [
            {
                id: 1,
                content:
                    "https://images.unsplash.com/photo-1713105153664-0fd63ecee1ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
            },
            {
                id: 2,
                content:
                    "https://images.unsplash.com/photo-1709884732259-9f2f0a52288b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
            },
            {
                id: 3,
                content:
                    "https://images.unsplash.com/photo-1709884732287-491ef6210d41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
            },
            {
                id: 4,
                content:
                    "https://images.unsplash.com/photo-1709884732282-a526a1a837bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
            },
            {
                id: 5,
                content:
                    "https://images.unsplash.com/photo-1712651794803-fdf91d31d7b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
            },
        ],
        [
            {
                id: 1,
                content:
                    "https://images.unsplash.com/photo-1713519958958-2edc6990cb11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
            },
            {
                id: 2,
                content:
                    "https://plus.unsplash.com/premium_photo-1675186049435-00e5ab94c7c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
            },
            {
                id: 3,
                content:
                    "https://plus.unsplash.com/premium_photo-1677094766815-e0fe790e364a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
            },
            {
                id: 4,
                content:
                    "https://plus.unsplash.com/premium_photo-1680300273692-9fdbcc2ae1a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
            },
            {
                id: 5,
                content:
                    "https://plus.unsplash.com/premium_photo-1675103827197-b88ff0586d06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
            },
        ],
        [
            {
                id: 1,
                content:
                    "https://images.unsplash.com/photo-1710702888137-0c83e97ec36b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
            },
            {
                id: 2,
                content:
                    "https://images.unsplash.com/photo-1675958428291-ac8588eb1934?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
            },
            {
                id: 3,
                content:
                    "https://images.unsplash.com/photo-1709756013914-96c910927a2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
            },
            {
                id: 4,
                content:
                    "https://images.unsplash.com/photo-1651424775716-6e48cca454a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHxmcmVlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
            },
            {
                id: 5,
                content:
                    "https://images.unsplash.com/photo-1695760832442-6e4f479f8786?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAwfHxmcmVlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
            },
        ],
        [
            {
                id: 1,
                content:
                    "https://images.unsplash.com/photo-1695230953823-4131fdec587b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAzfHxmcmVlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
            },
            {
                id: 2,
                content:
                    "https://images.unsplash.com/photo-1718433449771-4978672055b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAyfHxmcmVlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
            },
            {
                id: 3,
                content:
                    "https://images.unsplash.com/photo-1695213999429-647b8542bbf0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA0fHxmcmVlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
            },
            {
                id: 4,
                content:
                    "https://images.unsplash.com/photo-1713955942770-a28d978c4f7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA3fHxmcmVlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
            },
            {
                id: 5,
                content:
                    "https://images.unsplash.com/photo-1721323960623-fdae1ec6c644?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA4fHxmcmVlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
            },
        ],
        [
            {
                id: 1,
                content:
                    "https://images.unsplash.com/photo-1722932608449-f9122a7f7237?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA5fHxmcmVlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
            },
            {
                id: 2,
                content:
                    "https://images.unsplash.com/photo-1722932620084-8f308ab8ee9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjExfHxmcmVlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
            },
            {
                id: 3,
                content:
                    "https://images.unsplash.com/photo-1695311285175-ec2bebe120c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjEzfHxmcmVlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
            },
            {
                id: 4,
                content:
                    "https://images.unsplash.com/photo-1689521568081-c5baa6133bd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIwfHxmcmVlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
            },
            {
                id: 5,
                content:
                    "https://images.unsplash.com/photo-1695310553736-1441229d7a70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIxfHxmcmVlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
            },
        ],
        [
            {
                id: 1,
                content:
                    "https://images.unsplash.com/photo-1713955942677-055e1ab0a04e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI2fHxmcmVlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
            },
            {
                id: 2,
                content:
                    "https://images.unsplash.com/photo-1712467539576-0b84255e62db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI4fHxmcmVlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
            },
            {
                id: 3,
                content:
                    "https://images.unsplash.com/photo-1713955073385-c5a7bb893ac7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjMwfHxmcmVlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
            },
            {
                id: 4,
                content:
                    "https://images.unsplash.com/photo-1619167054796-b8047de30c46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjMzfHxmcmVlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
            },
            {
                id: 5,
                content:
                    "https://images.unsplash.com/photo-1713955075500-a91f6c87c2a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM5fHxmcmVlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
            },
        ],
        [
            {
                id: 1,
                content:
                    "https://images.unsplash.com/photo-1641231338961-8282f1e4de84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQwfHxmcmVlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
            },
            {
                id: 2,
                content:
                    "https://images.unsplash.com/photo-1695311319410-608b202f9587?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQxfHxmcmVlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
            },
            {
                id: 3,
                content:
                    "https://images.unsplash.com/photo-1617243876873-6cea4ea0b4eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ1fHxmcmVlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
            },
            {
                id: 4,
                content:
                    "https://images.unsplash.com/photo-1713955700699-bf3489ca0fad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ5fHxmcmVlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
            },
            {
                id: 5,
                content:
                    "https://images.unsplash.com/photo-1722122280548-e21fae352af7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUwfHxmcmVlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
            },
        ],
    ];
    return NextResponse.json(content[id-1], { status: 200 });
}
