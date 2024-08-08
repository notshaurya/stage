import { NextResponse } from "next/server";

// To handle a POST request to /api
export async function GET() {
    const cards = [
        {
            id: 1,
            name: "Shaurya",
            username: "shaurya_suman",
            profileImg:
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        },
        {
            id: 2,
            name: "Undertaker",
            username: "the_undertakerrrrrrr",
            profileImg:
                "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 3,
            name: "John Cena",
            username: "john_cena",
            profileImg:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        },
        {
            id: 4,
            name: "Cristiano Ronaldo",
            username: "cr7",
            profileImg:
                "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        },
        {
            id: 5,
            name: "Lionel Messi",
            username: "lionel_messi",
            profileImg:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 6,
            name: "Neymar",
            username: "neymar_wolf",
            profileImg:
                "https://images.unsplash.com/photo-1519944518895-f08a12d6dfd5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
        },
        {
            id: 7,
            name: "Kylian Mbappe",
            username: "kylian_mbappe",
            profileImg:
                "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
        },
        {
            id: 8,
            name: "Mark Henry",
            username: "mark_henry",
            profileImg:
                "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
        },
        {
            id: 9,
            name: "Jenifer",
            username: "jenifer",
            profileImg:
                "https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
        },
        {
            id: 10,
            name: "Roman Petrov",
            username: "roman_petrov",
            profileImg:
                "https://images.unsplash.com/photo-1512359573855-953710d3f7a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
        },
    ];
    return NextResponse.json(cards, { status: 200 });
}
