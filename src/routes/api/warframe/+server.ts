import data from '../../../data/warframe_data.json';

export function GET() {
    return new Response(JSON.stringify(data), {
        headers: {"content-type": "application/json"}
    })
}