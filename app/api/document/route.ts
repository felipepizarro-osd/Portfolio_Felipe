import { NextResponse } from "next/server";
import path from 'path';
import {promises as fs} from 'fs';
type DocumentMappint = {
    path: string;
    filename: string;
}

type DocumentMappings = {
    [key: string]: DocumentMappint;
}

const documentMappings: DocumentMappings = {
    'cv-es' : {
        path: 'documents/Felipe_Pizarro_CV_ES.pdf',
        filename: 'Felipe_Pizarro_CV_ES.pdf',
    },
    'cv-en' : {
        path: 'documents/Felipe_Pizarro_CV_EN.pdf',
        filename: 'Felipe_Pizarro_CV_EN.pdf',
    },
};

export async function GET(request: Request) {

    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');

    // Verificamos si se proporcionó un tipo
    if (!type) {
      return NextResponse.json(
        { error: 'Tipo de documento no especificado' },
        { status: 400 }
      );
    }else {
        // Verificamos si el tipo de documento es soportado
        if (type !== 'pdf' && type !== 'doc' && type !== 'cv-en' && type !== 'cv-es') {
            return NextResponse.json(
            { error: 'Tipo de documento no soportado' },
            { status: 400 }
            );

            
        }else {
            const documentMapping = documentMappings[type];
            console.log(documentMapping);
            if (!documentMapping) {
                return NextResponse.json(
                { error: 'Tipo de documento no encontrado' },
                { status: 404 }
                );
            }else {
                const filePath = path.join(process.cwd(), 'public', documentMapping.path);
                //TODO: delelte this lines comment or use when you need to read the file binary
                // console.log(filePath);
                // const fileContent = await fs.readFile(filePath,{encoding: 'utf-8'});
                // const lines = fileContent.trim().split("\n");

                // console.log("contenido del archivo");
                // console.log(lines);
                try {
                    const fileBuffer = await fs.readFile(filePath);
                    const headers = new Headers();
                    headers.set('Content-Type', 'application/pdf');
                    headers.set('Content-Disposition', `attachment; filename=${documentMapping.filename}`);
                    headers.set('Content-Length', fileBuffer.byteLength.toString());
                    return new NextResponse(fileBuffer, {
                    headers,
                    status: 200,
                    });
                }catch (error) {
                    console.error(error);
                    return NextResponse.json(
                    { error: 'Error al leer el archivo' },
                    { status: 500 }
                    );
                }
            }
        }
    }    
}