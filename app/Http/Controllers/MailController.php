<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;
use App\Mail\simpleMail;
use App\Mail\varificationMail;
use App\Mail\varificationSuccessMail;
use App\Mail\signupRejectedMail;

class MailController extends Controller
{
    public function email_varification($code, $mail){

        // $code = $request['code'];
        // $mail = $request['mail'];
        $mailData = [
            'title' => 'Varification Mail from CPC, PUST',
            'code' => $code,
        ];

        Mail::to($mail)->send(new varificationMail($mailData));
        //dd('Mail send successfully.');
    }
    public function email_varification_success($mail){
        // $mail = $request['email'];
        $mailData = [
            'title' => 'Varification Mail from CPC, PUST',
        ];

        Mail::to($mail)->send(new varificationSuccessMail($mailData));
        //dd('Mail send successfully.');
    }
    public function signup_rejected_mail(Request $request){
        $mail = $request['mail'];
        $mailData = [
            'title' => 'Signup request rejection Mail from CPC, PUST',
            'body' => 'Sorry, Your signpu request is rejected. Some reason can be, your mail is not varified, your information is not currect etc. if you want to be a member signup again or get help from cpc pust Team member.',
        ];

        Mail::to($mail)->send(new simpleMail($mailData));
        //dd('Mail send successfully.');
    }

    public function signup_approve_mail($mail){
        // $mail = $request['mail'];
        $mailData = [
            'title' => 'Signup request Accepted Mail from CPC, PUST',
            'body' => 'Congratulations, Your signup request is approved by CPC, PUST admin. Now you can login to CPC, PUST.',
        ];

        Mail::to($mail)->send(new simpleMail($mailData));
        //dd('Mail send successfully.');
    }

}
