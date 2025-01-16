import { warframes } from '$lib/warframes';

export function GET() {
    return new Response(JSON.stringify(warframes), {
        headers: {
            'content-type': 'application/json'
        }
    });
}