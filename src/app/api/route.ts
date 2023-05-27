import { NextApiRequest, NextApiResponse } from 'next';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // const body = JSON.parse(req.body);
        console.log("++++++++++++++++>>>>>>>>>", req.cookies);
        res.end({ mmmm: 'jhylhjkbl;jhui' })
    } else {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
    }
};