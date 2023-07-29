<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;
use App\Mail\simpleMail;
use App\Mail\varificationMail;

class MailController extends Controller
{
    public function email_varification(Request $request){
        $code = $request['code'];
        $mail = $request['mail'];
        $mailData = [
            'title' => 'Varification Mail from CPC, PUST',
            'code' => $code,
        ];

        Mail::to($mail)->send(new varificationMail($mailData));
        dd('Mail send successfully.');
    }
}
